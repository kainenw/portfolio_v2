const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

async function runAxeTest() {
  console.log('🔍 Running quick accessibility test...');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000/projects/ecommerce-platform-redesign');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    console.log('\n📊 Results:');
    console.log(`✅ Violations: ${accessibilityScanResults.violations.length}`);
    
    if (accessibilityScanResults.violations.length > 0) {
      console.log('\n🚨 Violations found:');
      accessibilityScanResults.violations.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.id}: ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Nodes: ${violation.nodes.length}`);
      });
    } else {
      console.log('🎉 NO ACCESSIBILITY VIOLATIONS FOUND!');
    }
    
  } catch (error) {
    console.error('Error running test:', error);
  } finally {
    await browser.close();
  }
}

runAxeTest();
