import React from 'react';
import { ConsultantCard } from '../../components/consultant/consultantcard';
import styled from 'styled-components';

const consultants = [
	{
		id: 'raysison',
		name: 'Ray Sison',
		title: 'BD AND SUPPLY CHAIN',
		bio: `Ray Sison is the Business Development Lead for SCxCMC, connecting biotech companies with highly qualified consultants and CDMOs. With over 25 years of experience in the health care industry, Ray has:

- Placed over $200M in outsourced manufacturing and packaging contracts for novel dosage forms, drug-device combination products, scheduled drug products and commercial tech transfers.

- Developed outsourcing methodologies based on industry best practices for supply chain development, contract negotiation and risk management.

- Launched new products such as Orgovyx®, Xhance® Nuzyra® and Onzetra Xsail®.

- Completed an Executive Education course in global supply chain management to address challenges facing US based biotech companies looking to design and implement their sourcing strategies.

Ray holds a B.A. in Chemistry from Amherst College and an M.S. in Industrial Pharmacy from Long Island University. He is also a contributing author, lecturer and trainer in outsourcing best practices for industry-leading life sciences publications and conferences.`,
		photo: '/consultants/rayray.png',
		linkedin: 'https://www.linkedin.com/in/rainseasun/',
	},
	{
		id: 'kevinbittorf',
		name: 'Kevin Bittorf',
		title: 'CMC STRATEGY AND FORMULATION',
		bio: `Kevin is an accomplished Senior Executive and Consultant with demonstrated success in pharmaceutical development and innovative manufacturing from feasibility to commercialization. His extensive leadership and business development experience has led several companies thorough commercialization, implementation of innovative technologies, and successful licensing deals. During this, Kevin developed more than 30 products for both innovative and generic companies.

As an industry leader, Kevin excels at driving innovative processes and developing global partnerships throughout North America, Europe, and Asia. Throughout his executive career, Kevin has been responsible for implementing manufacturing processes resulting in cost savings and improved product control, engaging stakeholders to secure funding for technology investments, and leading Quality by Design regulatory submissions.

Taking on initiatives to help the community, Kevin co-founded a B-Corporation to treat Hepatitis C in emerging markets, as well as founded an educational program allowing children access to pharmaceutical product laboratories. Because of this, he was awarded the “Volunteer of the Year” award by the United Way.

Kevin completed his PhD and MBA at the University of Alberta and is a registered professional engineer.`,
		photo: '/consultants/kevin.png',
		linkedin: 'https://www.linkedin.com/in/bittorf/',
	},
	{
		id: 'frankgibson',
		name: 'Frank Gibson',
		title: 'PROCESS CHEMISTRY AND STERILE FORMULATION',
		bio: `Frank has 30 years of experience designing, developing and executing manufacturing processes for numerous drug APIs and drug products. These include both oral solid dose and injectable formulations, complex suspensions, and liposomes. He has extensive experience leading teams in developing validated analytical methods for manufacturing processes, as well as supply chain logistics and overall project management.

Frank has delivered many batches of GMP quality drug substances and drug products over his career in support of clinical trials as well as commercial supply. These include oncology drugs, CNS, anti infectives, highly potent and cytotoxic agents.

Frank obtained his Ph.D. in organic chemistry from Rutgers University, and was awarded a post doctoral fellowship from the University of California at Berkeley, and started his career with Bristol-Myers Squibb in Syracuse, NY.`,
		photo: '/consultants/frank.png',
		linkedin: 'https://www.linkedin.com/in/frank-gibson-94657510/',
	},
	{
		id: 'emmatrivella',
		name: 'Emma Trivella',
		title: 'PROJECT MANAGEMENT AND PACKAGING',
		bio: `A professional chemical engineer consultant with broad-based experience in diverse scientific and administrative business and educational environments. An effective leader and team builder with a proven success record in project management, technical problem solving, and broad communication skills. Capable of exceeding company expectations by developing and executing cohesive goal plans. Emma has ensured milestones in a timely manner maintaining project plan forecasts on both clinical and commercial pharmaceutical pipelines.`,
		photo: '/consultants/emma.png',
		linkedin: 'https://www.linkedin.com/in/emmatrivella/',
	},
	{
		id: 'nicholascardoso',
		name: 'Nicholas Cardoso',
		title: 'FORMULATION AND PROCESS DEVELOPMENT',
		bio: `Nicholas is an accomplished scientist and manager with over 18 years of experience in the pharmaceutical industry and proficient in all phases of pharmaceutical drug product development and manufacturing. Nicholas has extensive experience in managing and troubleshooting manufacturing products/processes from Phase 1 – Commercial, Solid oral dose and aseptic manufacturing. Nicholas is a technical expert in: spray drying, wet/dry granulation, compression, coating, continuous manufacturing, early phase formulations, microparticulate processing for parenteral injection, and aseptic fill/finish. Nicholas is quality focused with extensive knowledge of cGMP’s and compliance, including but not limited to; writing and reviewing: SOPs, batch records, IOQs, processing/cleaning validation, deviations, change controls, and technical GMP documentation. Nicholas has also been involved in designing labs and manufacturing suites with a focus on streamlining the drug product formulation and manufacturing process including assisting in the execution of one of the first continuous pharmaceutical commercial manufacturing rigs in North America.`,
		photo: '/consultants/nicholas.png',
		linkedin: 'https://www.linkedin.com/in/nickcard/',
	},
	{
		id: 'bobhaldane',
		name: 'Bob Haldane',
		title: 'QUALITY ASSURANCE',
		bio: `Bob is a talented, versatile Engineer with a diverse background of 20+ years in pharmaceutical and medical device manufacturing environments. His degrees include a Bachelor of Science in Chemistry and an Associates of Science in Electronic Technology. Starting his career as a bench chemist led to roles in clinical supply packaging, quality management, internal and external auditing, equipment, and process validations. Dosage forms included solid dose tablets, softgel capsules, and sterile injectable products for clinical studies and commercial release.

Bob’s history of supporting regulatory compliance includes on-site and remote auditing of Suppliers and internal departments, generating documentation (SOP,CAPA, PFEMA, and PPAP), investigations as a MRB team member, production process trouble shooting, validation of process/equipment/utilities (DQ’s, FAT,SAT & IQ/OQ/PQ's and cleaning validations)and execution of Gage R & R studies. Solid understanding of manufacturing statistics including Process Capability calculations (Pp, Ppk, Cp & Cpk), Normality Testing, Transformation of Non-Normal Data Sets, and application of Operating Characteristic Curves to Sample Plans. Bob has been trained by Dr. Wayne Taylor in validation principles and statistical calculations.`,
		photo: '/consultants/bob.png',
		linkedin: 'https://www.linkedin.com/in/bobhaldanenaplesfl/',
	},
	{
		id: 'elainestone',
		name: 'Elaine Stone',
		title: 'COMPACTION SIMULATION AND FORMULATION',
		bio: `Elaine is formulation scientist and consultant specializing in the development of solid oral dosage forms. She has a passion for tablets and material science and has extensive practical experience at all stages of drug project delivery from initial concept design, through clinical manufacturing, late stage development, regulatory submission and lifecycle management.

She has proven working knowledge of GMP and contract experience. Elaine is recognized as a compaction simulation expert and can use her skill to translate and communicate project risks to non-material scientists.`,
		photo: '/consultants/elaine.png',
		linkedin: 'https://www.linkedin.com/in/elaine-harrop-stone-0b267a2/',
	},
];

const PageHeading = styled.h1`
	font-size: 2.8rem;
	color: #2b4159;
	font-weight: 800;
	text-align: center;
	margin-top: 2.5rem;
	margin-bottom: 1.5rem;
	letter-spacing: -1px;
`;

const HeadingDivider = styled.hr`
	width: 80px;
	border: none;
	border-top: 4px solid #00a693;
	margin: 0 auto 2.5rem auto;
	border-radius: 2px;
	transform: scaleX(0);
	transform-origin: center;
	animation: grow-divider 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;

	@keyframes grow-divider {
		to {
			transform: scaleX(1);
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	row-gap: 4.5rem;
	column-gap: 0.5rem;
	margin-top: 1.5rem;
	justify-items: center;
	align-items: start;

	& > :nth-child(7) {
		grid-column: 2 / 3;
	}

	@media (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
		& > :nth-child(7) {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		& > :nth-child(7) {
			grid-column: 1 / -1;
		}
	}
`;

const Consultants: React.FC = () => (
	<>
		<PageHeading>Meet Our Experts</PageHeading>
		<HeadingDivider />
		<Grid>
			{consultants.map((consultant) => (
				<ConsultantCard key={consultant.id} consultant={consultant} />
			))}
		</Grid>
	</>
);

export { consultants };

export default Consultants;
