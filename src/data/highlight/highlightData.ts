/**
 * Highlight Data
 *
 * Top 3 always start with:
 * 1. Years of Experience
 * 2. Education
 * 3. Skills
 */
type HighlightDataType = {
  [key: string]: string[];
};

export const highlightData: HighlightDataType = {
  main: [
    "3+ Years experience in Web Development",
    "Diploma in Computer Systems",
    "Proficient in JavaScript, HTML, and CSS",
    "Proficient in React and NodeJS, with a strong background in developing reusable UI components.",
    "Familiar with back-end technologies, including Java and PHP",
    "Experienced in creating mobile applications",
    "Strong proficiency in written and verbal communication in English",
  ],
  logo: [
    "3+ years of experience in Web Development with a focus on fullstack projects",
    "Diploma in Computer Systems",
    "Experienced in TypeScript, React (Next.js), Express, and SQL",
    "Experienced in deployment on AWS, Cloudflare, and Vercel",
    "Strong problem-solving skills with a self-starter mindset",
    "Strong proficiency in written and verbal communication in English",
  ],
  coinbase: [],
  ashare: [],
  motionMetrics: [
    "3+ years of experience in Full Stack Web Development with proficiency in both Frontend and Backend",
    "Diploma in Computer Systems",
    "Strong background in the full Software Development Life Cycle (SDLC)",
    "Proficient in JavaScript, TypeScript, React.js, Express, Node.js, MySQL, and MongoDB",
    "Skilled in creating and deploying microservices with REST API design patterns",
    "Experienced in AWS services (EC2, Lambda, S3, CloudFront, ECS, RDS)",
    "Capable of developing interactive and user-friendly front-end applications",
    "Ability to work independently and adapt to changing requirements, consistently delivering high-quality solutions",
  ],
  arcteryx: [
    "3+ Years experience in Web Development",
    "Diploma in Computer Systems",
    "Experienced in TypeScript, React, Node",
    "Experienced in project management tools and version control systems",
    "Experienced in CI/CD pipelines (Github Actions)",
    "Experienced in AWS services (EC2, Lambda, S3, CloudFront, ECS, RDS)",
    "Proficient in Styled Components and understanding of Web Analytics.",
    "Exceptional communication and documentation skills.",
    "Demonstrated dedication to continuous learning and technology exploration.",
  ],
  later: [
    "3+ years of experience as a full-stack software developer",
    "2+ years of expertise in developing distributed web applications",
    "Diploma in Computer Systems",
    "Proficient in TypeScript with addition React, Express.js, and Node.js.",
    "Experienced in AWS services (EC2, Lambda, S3, CloudFront, ECS, RDS)",
    "Experienced using CI/CD pipelines, monitoring, and observability tools.",
    "Skilled in both SQL and NoSQL databases (e.g., MongoDB, MYSQL).",
    "Knowledgeable in algorithmic complexity, optimizing code performance and efficiency.",
  ],
  "flutter-care": [
    "3+ years of experience as a full-stack software developer",
    "Proficient in JavaScript/TypeScript with extensive experience developing mobile apps using these languages.",
    "Proficient in Node.js and Firebase for building robust backend systems.",
    "Collaborated with design leads to create intuitive and user-friendly interfaces.",
    "Strong interpersonal skills contributing to a positive work environment.",
    "Excellent at documenting work and maintaining tests and diagnostic tools.",
    "Quickly learns new technologies and frameworks, eager to grow as a full-stack developer.",
  ],
  visualping: [
    "3+ years of experience as a full-stack software developer",
    "Diploma in Computer Systems",
    "Experienced in TypeScript, React (Next.js), Tailwind CSS",
    "Experienced using CI/CD pipelines, monitoring, and observability tools.",
    "Good team player with a ‘can do’ attitude and proven ability to propel projects and teams to peak results while working with minimal supervision.",
    "Strong proficiency in written and verbal communication in English",
  ],
  scribd: [
    "3+ years of experience as a full-stack software developer",
    "Diploma in Computer Systems",
    "Experienced in TypeScript, React (Next.js), MySQL, Tailwind CSS, and GraphQL",
    "Experienced in AWS services (EC2, Lambda, S3, CloudFront, ECS, RDS)",
    "Experienced using CI/CD pipelines, monitoring, and observability tools.",
    "Good team player with a ‘can do’ attitude and proven ability to propel projects and teams to peak results while working with minimal supervision.",
    "Strong proficiency in written and verbal communication in English",
  ],
};
highlightData.coinbase = highlightData.logo;
highlightData.ashare = highlightData.logo;
