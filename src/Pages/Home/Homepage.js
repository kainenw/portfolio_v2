import React from 'react';
import { Helmet } from 'react-helmet-async';
import Deck from '../../Components/Deck/Deck';
import MetricsDisplay from '../../Components/MetricsDisplay/MetricsDisplay';
import CTAButton from '../../Components/CTAButton/CTAButton';
import { featuredProjects } from '../featuredProjectsData';
import { Sparkle, FolderOpen, Handshake, Quote } from 'lucide-react';

const testimonials = [
	{
		name: 'Sarah Lee',
		company: 'Acme Corp',
		photo: 'https://randomuser.me/api/portraits/women/44.jpg',
		quote: 'Working with Kainen was a game-changer. The new product design increased our user engagement by 40%.',
		title: 'Product Manager',
	},
	{
		name: 'Brad Smith',
		company: 'Smith Digital',
		photo: 'https://randomuser.me/api/portraits/men/32.jpg',
		quote: 'Kainen delivered exactly what we needed—on time and with a level of polish that impressed our whole team.',
		title: 'CEO',
	},
	{
		name: 'Priya Patel',
		company: 'StartupX',
		photo: 'https://randomuser.me/api/portraits/women/68.jpg',
		quote: 'The design process was collaborative and insightful. Our conversion rate improved dramatically.',
		title: 'Founder',
	},
];

// Portfolio metrics data
const portfolioMetrics = [
	{
		value: 55,
		type: 'percentage',
		label: 'Average Engagement Increase',
		description: 'Across completed projects',
		icon: 'increase',
	},
	{
		value: 8,
		type: 'number',
		label: 'Projects Completed',
		description: 'Design & development work',
		icon: 'target',
	},
	{
		value: 95,
		type: 'percentage',
		label: 'Client Satisfaction',
		description: 'Based on project feedback',
		icon: 'award',
	},
	{
		value: 40,
		type: 'percentage',
		label: 'Average User Engagement Boost',
		description: 'Measured post-launch',
		icon: 'users',
	},
];

function Homepage() {
	return (
		<div className="Homepage Page">
			<Helmet>
				<title>Kainen White | Product & UX Designer</title>
				<meta
					name="description"
					content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies."
				/>
				{/* Open Graph tags */}
				<meta property="og:title" content="Kainen White | Product & UX Designer" />
				<meta
					property="og:description"
					content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies."
				/>
				<meta property="og:url" content="https://www.kainenwhite.com/" /> {/* Replace with actual domain */}
				<meta property="og:image" content="https://www.kainenwhite.com/og-image.png" /> {/* Replace with actual image URL */}
				<meta property="og:type" content="website" />
				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Kainen White | Product & UX Designer" />
				<meta
					name="twitter:description"
					content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies."
				/>
				<meta name="twitter:image" content="https://www.kainenwhite.com/twitter-image.png" /> {/* Replace with actual image URL */}
				{/* Add other homepage-specific meta tags here if needed */}
			</Helmet>
			<div className="hero non-contrast-section" id="hero">
				<Sparkle size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
				<h1>
					Crafting <span className="highlight">User-Centric</span> Digital Experiences
				</h1>
				<p>
					I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions. Explore my work to see how I blend
					creativity with strategy to deliver impactful results.
				</p>
				<div className="hero-actions">
					<CTAButton href="/projects" variant="primary" size="medium">
						View Projects
					</CTAButton>
					<CTAButton href="/about#my-process" variant="secondary" size="medium">
						My Process
					</CTAButton>
					<CTAButton href="/contact" variant="primary" size="medium">
						Get in Touch
					</CTAButton>
				</div>
			</div>

			<section className="featured-projects contrast-section" id="my-process">
				<FolderOpen size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
				<h2 className="left-right-padding">Featured Projects</h2>
				<Deck items={featuredProjects} actionType="caseStudy, demo" />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<CTAButton href="/projects" variant="secondary" size="medium">
						View All Projects
					</CTAButton>
				</div>
			</section>

			<section className="testimonials contrast-section" id="testimonials" style={{ margin: '3rem 0' }}>
				<h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
					<Quote size={32} style={{ verticalAlign: 'middle', marginRight: 8 }} />
					What Clients Say
				</h2>
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
					{testimonials.map((t, i) => (
						<div
							key={i}
							className="testimonial-card"
							style={{
								background: 'var(--off-white, #fff)',
								borderRadius: 16,
								boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
								border: '1px solid var(--gray, #e0e0e0)',
								maxWidth: 340,
								minWidth: 260,
								padding: '2rem 1.5rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								flex: '1 1 260px',
							}}
						>
							<img
								src={t.photo}
								alt={t.name}
								style={{
									width: 64,
									height: 64,
									borderRadius: '50%',
									objectFit: 'cover',
									marginBottom: 16,
									border: '3px solid var(--accent-color, #007acc)',
								}}
								loading="lazy"
							/>
							<p
								style={{
									fontStyle: 'italic',
									color: 'var(--secondary-text-color, #555)',
									marginBottom: 16,
								}}
							>
								&ldquo;{t.quote}&rdquo;
							</p>
							<div style={{ fontWeight: 600, color: 'var(--text-color, #222)' }}>{t.name}</div>
							<div style={{ fontSize: '0.95rem', color: 'var(--secondary-text-color, #888)' }}>
								{t.title}, {t.company}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Portfolio Metrics Section */}
			<section className="portfolio-metrics non-contrast-section" style={{ margin: '4rem 0', textAlign: 'center' }}>
				<h2 style={{ marginBottom: '1rem' }}>Results That Matter</h2>
				<p
					style={{
						marginBottom: '3rem',
						maxWidth: '600px',
						margin: '0 auto 3rem',
						color: 'var(--secondary-text-color, #666)',
					}}
				>
					Numbers that showcase the impact of user-centered design and strategic thinking.
				</p>
				<MetricsDisplay metrics={portfolioMetrics} layout="horizontal" variant="highlight" />
			</section>

			<section className="homepage-cta non-contrast-section">
				<Handshake size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
				<h2>Ready to build something great together?</h2>
				<p>
					Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.
				</p>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<CTAButton href="/contact" variant="primary" size="large">
						Get in Touch
					</CTAButton>
				</div>
			</section>
		</div>
	);
}

export default Homepage;
