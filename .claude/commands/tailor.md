---
description: Generate a tailored resume for a specific company based on a job description
allowed-tools: Read, Write, Edit, Glob, Grep, AskUserQuestion
---

# Tailor Resume Skill

Generate a customized resume variant for a specific company by analyzing a job description and tailoring highlights and experiences accordingly.

> **CRITICAL: This is an interactive process. NEVER auto-write to files.**
> Always show proposed highlights and experiences to the user for review and approval BEFORE writing anything. The user must explicitly approve the content to avoid including skills or experiences they don't have.

## Usage

```
/tailor {company}
```

Where `{company}` is the lowercase identifier for the target company (e.g., `stripe`, `google`, `meta`).

## Workflow

### Step 1: Get Job Description

Ask the user to paste the job description:

```
Please paste the full job description for {company}. I'll analyze it to create a tailored resume.
```

### Step 2: Read Existing Data

Read these files to understand available experience:
- `/src/data/highlight/highlightData.ts` - existing highlight examples
- `/src/data/experiences/experiencesData.ts` - work history with tasks
- `/src/data/path.ts` - existing routes

Use the `main` key as the baseline experience data, as it contains the most comprehensive and up-to-date information.

### Step 3: Analyze Job Description

Extract and identify:
- **Required technologies/skills** (languages, frameworks, tools)
- **Years of experience needed**
- **Soft skills emphasized** (communication, leadership, collaboration)
- **Industry/domain keywords** (fintech, e-commerce, SaaS, etc.)
- **Key responsibilities** that match the candidate's experience
- **Nice-to-have skills** that the candidate possesses

### Step 4: Generate Highlights

Create 5-7 tailored bullet points following this pattern:
1. **Years of experience** - Match or slightly exceed the job requirement
2. **Education** - "Diploma in Computer Systems"
3. **Core technical skills** - Prioritize technologies mentioned in the job description
4. **Cloud/Infrastructure** - Highlight relevant AWS services or deployment experience
5. **Architecture/Patterns** - Microservices, REST APIs, etc. if mentioned
6. **Tools/Testing** - Relevant tools like Playwright, Docker, etc.
7. **Soft skills** - Communication, collaboration, based on job emphasis

Use existing highlights from `highlightData.ts` as reference for tone and format.

### Step 5: Generate Experiences

Create an experiences array using the `main` experiences as the base, but:
1. **Reorder tasks** within each job to prioritize those matching the job description
2. **Select most relevant tasks** (typically 3-5 per job)
3. **Keep the same job structure** (title, company, timespan, subText)

The experience structure should be:
```typescript
{
  title: string;
  company: string;
  companyType: string;
  timespan: string;
  subText: string;
  tasks: string[];
}
```

### Step 6: Review Highlights with User

**IMPORTANT: Do NOT write to files yet. Show the generated highlights first and ask for approval.**

Display the proposed highlights in a numbered list:

```
## Proposed Highlights for {company}

1. [highlight 1]
2. [highlight 2]
3. [highlight 3]
...

Please review these highlights:
- Type "ok" or "approve" to accept all
- Type numbers to remove (e.g., "remove 3, 5" or "delete 2")
- Type "edit 2: new text here" to modify a specific highlight
- Type "add: new highlight text" to add a new one
- Type any feedback and I'll regenerate
```

Wait for user confirmation before proceeding. Make any requested changes.

### Step 7: Review Experiences with User

**IMPORTANT: Do NOT write to files yet. Show the generated experiences first and ask for approval.**

Display the proposed experiences with their tasks:

```
## Proposed Experiences for {company}

### Job 1: {title} at {company}
Tasks (in order):
1. [task 1]
2. [task 2]
3. [task 3]
...

### Job 2: {title} at {company}
Tasks (in order):
1. [task 1]
2. [task 2]
...

Please review these experiences:
- Type "ok" or "approve" to accept all
- To reorder tasks: "job 1: reorder 3, 1, 2"
- To remove a task: "job 1: remove 2"
- To remove an entire job: "remove job 2"
- Type any feedback and I'll adjust
```

Wait for user confirmation before proceeding. Make any requested changes.

### Step 8: Write to Files (Only After Approval)

**Only after the user has approved both highlights AND experiences**, update the files:

> **IMPORTANT: Comma handling.** These files contain JavaScript objects/arrays. When inserting a new entry after the last existing entry, ensure the previous entry has a trailing comma before the new entry. Missing commas will cause parse errors.

**highlightData.ts** - Add before the closing `};` (but after the last existing entry, ensuring a comma separates them):
```typescript
  {company}: [
    // approved highlights
  ],
```

**experiencesData.ts** - Add before the closing `};` (but after the last existing entry, ensuring a comma separates them):
```typescript
  {company}: [
    // approved experiences
  ],
```

**path.ts** - Add to the routes array (ensure a comma after the previous entry):
```typescript
  { company: "{company}" },
```

### Step 9: Show Summary

After writing, confirm to the user:

```
## Resume Created for {company}

Files updated:
- src/data/highlight/highlightData.ts
- src/data/experiences/experiencesData.ts
- src/data/path.ts

You can now view the tailored resume at: http://localhost:3000/{company}
```

## Guidelines

### Highlight Generation
- Start each highlight with action-oriented language
- Be specific about technologies (e.g., "React.js, Next.js" not just "React")
- Match the tone of existing highlights in the codebase
- Include metrics where available (e.g., "300% decrease in load time")

### Task Prioritization
- Put tasks mentioning job-relevant technologies first
- Backend-focused jobs: API, microservices, database tasks first
- Frontend-focused jobs: UI, responsive design, component tasks first
- Full-stack jobs: Balance both, with emphasis on integration
- DevOps/Cloud jobs: AWS, deployment, infrastructure tasks first

### Company Key Naming
- Use lowercase
- Use hyphens for multi-word names (e.g., `flutter-care`)
- Use underscores for organization names with spaces (e.g., `heart_and_stroke`)
- Keep it short but recognizable

## Example

For `/tailor stripe` with a backend-focused job description mentioning Node.js, APIs, and payments:

```typescript
// highlightData.ts
stripe: [
  "5+ years of experience as a full-stack software developer",
  "Diploma in Computer Systems",
  "Strong expertise in Node.js microservices and REST API design",
  "Proficient in JavaScript, TypeScript, React.js, Next.js, Node.js, Express, and MySQL",
  "Experienced in AWS services (Lambda, ECS, S3, DynamoDB, EventBridge) for scalable backend solutions",
  "Skilled in building secure, high-performance API integrations",
  "Strong written and verbal communication skills",
],

// experiencesData.ts
stripe: [
  {
    title: "Software Developer",
    company: "Origineer Consulting Inc",
    companyType: "Restaurant Technology",
    timespan: "Mar 2025 - Current",
    subText: "Burnaby, BC",
    tasks: [
      "Built and maintained Node.js backend APIs across multiple microservices (order management, menu systems), deployed on Heroku, AWS Lambda, and Docker/ECS",
      "Integrated Deliverect POS API to expand restaurant partner capabilities and streamline order management workflows",
      "Architected cloud infrastructure using AWS services including S3, DynamoDB, Lambda, EventBridge, ECS, and RDS for scalable restaurant technology solutions",
      "Developed operation and sales portals to track 1,500+ leads and onboard 60+ merchants, driving business growth and team efficiency",
    ],
  },
  // ... more experiences with backend-relevant tasks prioritized
]
```
