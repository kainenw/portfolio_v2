const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');

const urls = [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/projects',
    'http://localhost:3000/contact',
    'http://localhost:3000/projects/case-study/shopify-conversion-optimization'
];

async function runAxeTests() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    
    for (const url of urls) {
        const page = await context.newPage();
        
        try {
            console.log(`Testing: ${url}`);
            await page.goto(url, { waitUntil: 'networkidle' });
            
            const results = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
                .analyze();
            
            const pageName = url.replace('http://localhost:3000', '') 
                .replace(/\//g, '-')
                .replace(/^-/, '') || 'home';
            
            fs.writeFileSync(`axe-${pageName}.json`, JSON.stringify(results, null, 2));
            
            // Generate HTML report
            const htmlReport = `
<!DOCTYPE html>
<html>
<head>
    <title>Axe Accessibility Report - ${pageName}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .violation { background: #ffebee; padding: 10px; margin: 10px 0; border-left: 4px solid #f44336; }
        .pass { background: #e8f5e8; padding: 10px; margin: 10px 0; border-left: 4px solid #4caf50; }
        .incomplete { background: #fff3e0; padding: 10px; margin: 10px 0; border-left: 4px solid #ff9800; }
        .summary { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
        h1, h2 { color: #333; }
        pre { background: #f5f5f5; padding: 10px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Axe Accessibility Report: ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
    <div class="summary">
        <h2>Summary</h2>
        <p><strong>URL:</strong> ${url}</p>
        <p><strong>Violations:</strong> ${results.violations.length}</p>
        <p><strong>Passes:</strong> ${results.passes.length}</p>
        <p><strong>Incomplete:</strong> ${results.incomplete.length}</p>
        <p><strong>Test Date:</strong> ${new Date().toLocaleString()}</p>
    </div>
    
    ${results.violations.length > 0 ? `
    <h2>Violations (${results.violations.length})</h2>
    ${results.violations.map(violation => `
        <div class="violation">
            <h3>${violation.id}: ${violation.help}</h3>
            <p><strong>Impact:</strong> ${violation.impact}</p>
            <p><strong>Description:</strong> ${violation.description}</p>
            <p><strong>Help URL:</strong> <a href="${violation.helpUrl}" target="_blank">${violation.helpUrl}</a></p>
            <p><strong>Affected Elements:</strong> ${violation.nodes.length}</p>
            ${violation.nodes.map(node => `
                <div style="margin-left: 20px; background: #fafafa; padding: 10px; margin: 5px 0;">
                    <strong>Target:</strong> <code>${node.target.join(', ')}</code><br>
                    <strong>HTML:</strong> <code>${node.html}</code><br>
                    ${node.failureSummary ? `<strong>Failure:</strong> ${node.failureSummary}` : ''}
                </div>
            `).join('')}
        </div>
    `).join('')}
    ` : '<div class="pass"><h2>No Violations Found! 🎉</h2></div>'}
    
    ${results.incomplete.length > 0 ? `
    <h2>Incomplete Tests (${results.incomplete.length})</h2>
    <p>These tests could not be completed and may require manual verification:</p>
    ${results.incomplete.map(incomplete => `
        <div class="incomplete">
            <h3>${incomplete.id}: ${incomplete.help}</h3>
            <p>${incomplete.description}</p>
        </div>
    `).join('')}
    ` : ''}
    
    <h2>Successful Tests (${results.passes.length})</h2>
    <div class="pass">
        <p>${results.passes.length} accessibility tests passed successfully.</p>
        <details>
            <summary>View passed tests</summary>
            <ul>
                ${results.passes.map(pass => `<li>${pass.id}: ${pass.help}</li>`).join('')}
            </ul>
        </details>
    </div>
</body>
</html>`;
            
            fs.writeFileSync(`axe-${pageName}.html`, htmlReport);
            
        } catch (error) {
            console.error(`Error testing ${url}:`, error.message);
        } finally {
            await page.close();
        }
    }
    
    await context.close();
    await browser.close();
    console.log('Axe tests completed!');
}

runAxeTests().catch(console.error);
