(() => {
  "use strict";

  const STORAGE_KEY = "gabriel-learning-hub-v2";
  const LEGACY_STORAGE_KEY = "jena-learning-hub-v1";
  const PROGRAM_YEAR = 2027;
  const LESSONS = [
    { day: 1, track: "SEO", title: "SEO Fundamentals", tasks: ["Understand what SEO is.", "Learn how search engines work.", "Understand crawling, indexing, and ranking.", "Learn search intent.", "Study Google's SEO Starter Guide."] },
    { day: 2, track: "SEO", title: "Keyword Research", tasks: ["Understand short-tail and long-tail keywords.", "Learn search volume and keyword difficulty.", "Practice finding 20 keywords.", "Learn keyword mapping."] },
    { day: 3, track: "SEO", title: "SERP and Local SEO", tasks: ["Understand Google search results.", "Learn local SEO fundamentals.", "Study Google Business Profile basics.", "Analyze five search results."] },
    { day: 4, track: "SEO", title: "On-Page SEO", tasks: ["Learn title tags.", "Write meta descriptions.", "Understand H1, H2, and H3.", "Optimize URLs.", "Practice internal linking."] },
    { day: 5, track: "SEO", title: "Content SEO", tasks: ["Learn SEO content writing.", "Create a content outline.", "Understand topical relevance.", "Learn image optimization and alt text."] },
    { day: 6, track: "SEO", title: "Technical SEO", tasks: ["Learn XML sitemaps.", "Understand robots.txt.", "Learn canonical URLs.", "Understand redirects.", "Learn basic website speed optimization."] },
    { day: 7, track: "SEO", title: "SEO Audit and Reporting", tasks: ["Learn Google Search Console.", "Understand GA4 basics.", "Perform a sample website SEO audit.", "Create a keyword research spreadsheet."] },
    { day: 8, track: "GoHighLevel", title: "GoHighLevel Foundations", tasks: ["Understand the dashboard.", "Learn account and sub-account structure.", "Explore settings.", "Understand the main navigation."] },
    { day: 9, track: "GoHighLevel", title: "CRM Management", tasks: ["Create contacts.", "Understand tags.", "Learn custom fields.", "Create smart lists.", "Practice contact organization."] },
    { day: 10, track: "GoHighLevel", title: "Pipelines and Opportunities", tasks: ["Understand sales pipelines.", "Create pipeline stages.", "Learn opportunity management.", "Understand lead status."] },
    { day: 11, track: "GoHighLevel", title: "Forms and Funnels", tasks: ["Create a lead capture form.", "Build a landing page.", "Create a thank-you page.", "Connect form submissions to CRM contacts."] },
    { day: 12, track: "GoHighLevel", title: "Workflows and Automation", tasks: ["Understand triggers.", "Learn workflow actions.", "Create a welcome automation.", "Practice conditions and filters."] },
    { day: 13, track: "GoHighLevel", title: "Calendar and Appointment Automation", tasks: ["Create a sample booking calendar.", "Configure appointment reminders.", "Understand follow-up workflows.", "Learn no-show automation."] },
    { day: 14, track: "GoHighLevel", title: "Advanced GoHighLevel", tasks: ["Learn snapshots.", "Study integrations.", "Explore webhooks.", "Learn workflow testing.", "Explore AI Employee and Voice AI.", "Complete one practical GHL project."] },
    { day: 15, track: "HubSpot", title: "HubSpot Foundations", tasks: ["Explore the HubSpot dashboard.", "Understand contacts.", "Understand companies.", "Understand deals.", "Understand tickets."] },
    { day: 16, track: "HubSpot", title: "HubSpot Sales Hub", tasks: ["Learn sales pipelines.", "Create deals.", "Understand deal stages.", "Learn tasks and activities."] },
    { day: 17, track: "HubSpot", title: "HubSpot Contact Management", tasks: ["Learn contact properties.", "Understand segmentation.", "Create lists.", "Learn data organization."] },
    { day: 18, track: "HubSpot", title: "HubSpot Service Hub", tasks: ["Learn ticket management.", "Understand customer support workflows.", "Explore shared inboxes.", "Study knowledge bases."] },
    { day: 19, track: "CRM", title: "CRM Fundamentals", tasks: ["Understand what CRM means.", "Learn lead management.", "Understand customer lifecycle.", "Learn lead qualification."] },
    { day: 20, track: "CRM", title: "CRM Operations", tasks: ["Understand customer journeys.", "Learn lead nurturing.", "Study customer retention.", "Learn CRM data hygiene."] },
    { day: 21, track: "CRM", title: "CRM Reporting", tasks: ["Understand pipeline reports.", "Learn conversion rates.", "Explore dashboards.", "Create a sample CRM report."] },
    { day: 22, track: "AI Support", title: "AI Foundations", tasks: ["Understand artificial intelligence.", "Learn large language models.", "Understand AI limitations.", "Learn responsible AI use."] },
    { day: 23, track: "AI Support", title: "Prompt Engineering", tasks: ["Write effective prompts.", "Learn context and instructions.", "Practice structured outputs.", "Create reusable prompts."] },
    { day: 24, track: "AI Support", title: "AI Customer Support", tasks: ["Learn AI-assisted customer service.", "Create FAQ responses.", "Practice customer inquiry classification.", "Learn human escalation."] },
    { day: 25, track: "AI Support", title: "AI Automation", tasks: ["Understand AI agents.", "Learn automation concepts.", "Explore AI workflows.", "Understand human review."] },
    { day: 26, track: "AI Support", title: "AI + CRM", tasks: ["Learn AI-assisted lead summaries.", "Practice contact categorization.", "Create follow-up message drafts.", "Understand CRM automation."] },
    { day: 27, track: "SEO", title: "SEO Portfolio Project", tasks: ["Complete an SEO audit.", "Create a keyword research sheet.", "Optimize one sample webpage.", "Document the process."] },
    { day: 28, track: "GoHighLevel", title: "GoHighLevel Portfolio Project", tasks: ["Create a sample funnel.", "Build a CRM pipeline.", "Create a lead follow-up workflow.", "Test the automation."] },
    { day: 29, track: "HubSpot", title: "HubSpot and AI Portfolio Project", tasks: ["Build a sample HubSpot CRM.", "Create an AI customer support workflow.", "Document the workflow."] },
    { day: 30, track: "Career", title: "Final Assessment", tasks: ["Review all completed lessons.", "Test your skills.", "Organize your portfolio.", "Update your resume.", "Review job applications.", "Create your January learning roadmap."] }
  ];

  const TRACKS = [
    { id: "ghl", title: "GoHighLevel Specialist", short: "GoHighLevel", description: "CRM setup, funnels, pipelines, workflows, and integrations.", icon: "workflow", tone: "green" },
    { id: "crm", title: "CRM Specialist", short: "CRM", description: "HubSpot, Salesforce, Zoho, Pipedrive, and Freshsales.", icon: "users", tone: "purple" },
    { id: "api", title: "API Integration Specialist", short: "APIs", description: "REST, HTTP, JSON, authentication, webhooks, and testing.", icon: "workflow", tone: "blue" },
    { id: "seo", title: "SEO Specialist", short: "SEO", description: "Search visibility, technical foundations, and content.", icon: "search", tone: "orange" },
    { id: "ai", title: "AI Support Specialist", short: "AI Support", description: "Prompting, support workflows, and practical business AI.", icon: "sparkles", tone: "teal" },
    { id: "web", title: "Website Development & Technical Skills", short: "Web Development", description: "HTML, CSS, JavaScript, WordPress, GitHub, and Codex.", icon: "hub", tone: "navy" }
  ];

  const PHASES = [
    { title: "Search and Website Foundations", range: "Sessions 1–7 · follow at your own pace", start: 1, end: 7, tone: "blue" },
    { title: "GoHighLevel Systems", range: "Sessions 8–14 · practice as you learn", start: 8, end: 14, tone: "green" },
    { title: "CRM Workflows", range: "Sessions 15–21 · repeat or adjust anytime", start: 15, end: 21, tone: "orange" },
    { title: "AI, Portfolio, and Career Practice", range: "Sessions 22–30 · revisit whenever useful", start: 22, end: 30, tone: "purple" }
  ];

  const academyPath = (id, title, description, iconName, tone, lessons) => ({
    id, title, description, icon: iconName, tone,
    lessons: lessons.map(([titleText, objective, assignment, url], index) => ({
      id: `${id}-${index + 1}`, title: titleText, objective, assignment,
      description: `Study ${titleText.toLowerCase()} using the linked free official material, then capture the key idea in your notes.`,
      url
    }))
  });
  const ACADEMY_PATHS = [
    academyPath("ghl", "GoHighLevel Specialist", "Learn the CRM, marketing tools, automation, and integrations using the official free help center and API docs.", "workflow", "green", [
      ["HighLevel fundamentals and account layout", "Describe locations, settings, and the main areas of the platform.", "Make a one-page map of the navigation and explain what each area is for.", "https://help.gohighlevel.com/support/solutions"],
      ["CRM setup and contact records", "Create a clean contact structure with fields, tags, and notes.", "Design a sample contact record and a short data-entry checklist.", "https://help.gohighlevel.com/support/solutions"],
      ["Contacts, filters, and Smart Lists", "Use filters and saved lists to segment contacts by useful criteria.", "Write three Smart List rules for a sample business.", "https://help.gohighlevel.com/support/solutions"],
      ["Opportunities and Pipelines", "Explain pipeline stages and how opportunities move through them.", "Draft a five-stage pipeline and define an entry rule for each stage.", "https://help.gohighlevel.com/support/solutions"],
      ["Forms and Surveys", "Choose fields and map submissions into CRM records.", "Sketch a lead form and list its field-to-contact mappings.", "https://help.gohighlevel.com/support/solutions"],
      ["Funnels and Websites", "Describe pages, forms, navigation, and the visitor journey.", "Create a landing-page outline with a clear call to action.", "https://help.gohighlevel.com/support/solutions"],
      ["Workflows and Automation", "Explain workflow enrollment, trigger conditions, actions, and testing.", "Diagram a lead follow-up workflow with a stop condition.", "https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows"],
      ["Workflow triggers and actions", "Select a trigger and actions that fit a business process.", "Write a trigger/action table for a form submission.", "https://help.gohighlevel.com/support/solutions/articles/155000002445"],
      ["Email and SMS automation", "Plan permission-aware email/SMS follow-up and reply handling.", "Draft a three-step follow-up sequence with an opt-out and human handoff.", "https://help.gohighlevel.com/support/solutions"],
      ["Calendars and appointment booking", "Explain availability, booking, reminders, and follow-up.", "Map a booking flow from availability to post-appointment follow-up.", "https://help.gohighlevel.com/support/solutions"],
      ["Snapshots and reusable setups", "Identify which assets can be captured and reused in a snapshot.", "Create a checklist for a reusable sample business setup.", "https://help.gohighlevel.com/support/solutions/articles/48000982511-snapshots-overview"],
      ["Integrations and connected apps", "Map what data should move between HighLevel and another tool.", "Draw an integration flow and list where errors could occur.", "https://help.gohighlevel.com/support/solutions"],
      ["Troubleshooting workflow runs", "Trace enrollment, filters, action errors, and test records.", "Build a step-by-step workflow troubleshooting checklist.", "https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows"],
      ["Webhooks", "Explain an event payload, endpoint, response, and retry handling.", "Draft a webhook event map with sample JSON fields.", "https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-"],
      ["HighLevel API integration", "Find endpoints and understand supported auth and API versions.", "Plan a safe read-only API integration and document its request/response.", "https://marketplace.gohighlevel.com/docs/"]
    ]),
    academyPath("crm", "CRM Specialist", "Compare five CRMs and practice contact management, sales pipelines, reporting, and integrations.", "users", "purple", [
      ["CRM fundamentals and customer lifecycle", "Explain lead, contact, opportunity, customer, and lifecycle stages.", "Draw a lifecycle from first inquiry to repeat customer.", "https://academy.hubspot.com/lessons/managing-your-contacts-with-the-hubspot-crm"],
      ["HubSpot: contacts and properties", "Organize records with properties, activities, and lists.", "Design a compact contact schema for a sample company.", "https://academy.hubspot.com/lessons/managing-your-contacts-with-the-hubspot-crm"],
      ["HubSpot: leads, deals, and pipeline", "Track lead qualification and sales progress in a pipeline.", "Create stage definitions and a sample deal handoff.", "https://academy.hubspot.com/courses/building-your-business-with-hubspot-smart-crm"],
      ["Salesforce: CRM basics", "Recognize Salesforce records and standard sales processes.", "Map accounts, contacts, leads, and opportunities for a sample business.", "https://trailhead.salesforce.com/content/learn/modules/crm_basics"],
      ["Salesforce: lead management and pipeline", "Describe how leads become opportunities and how stages are tracked.", "Write a lead qualification checklist and pipeline stage guide.", "https://trailhead.salesforce.com/"],
      ["Zoho CRM: setup and contact management", "Organize modules, fields, contacts, and lead records.", "Draft field and data-quality rules for a sample CRM.", "https://www.zoho.com/crm/resources/"],
      ["Zoho CRM: sales process and automation", "Map a repeatable process using stages, tasks, and automation rules.", "Diagram a lead assignment and follow-up process.", "https://www.zoho.com/crm/resources/"],
      ["Pipedrive: deals and pipeline", "Use deals, activities, and stages to follow sales work.", "Create a sample pipeline with exit criteria for each stage.", "https://www.pipedrive.com/en/academy"],
      ["Freshsales: contacts and deals", "Describe contact, account, deal, and activity records.", "Map a small sales workflow and list useful CRM fields.", "https://support.freshsales.io/support/solutions/articles/217734-how-to-use-contacts"],
      ["CRM automation, reporting, and integrations", "Choose useful metrics and describe a safe CRM integration.", "Build a sample weekly report outline and integration data map.", "https://academy.hubspot.com/"]
    ]),
    academyPath("api", "API Integration Specialist", "Build a clear foundation in HTTP, REST, JSON, authentication, webhooks, and CRM integrations.", "workflow", "blue", [
      ["What is an API?", "Explain how software uses an API to exchange data.", "Describe one business task as a request and response.", "https://learning.postman.com/docs/getting-started/overview/"],
      ["How APIs work: client, server, and endpoint", "Identify the client, server, resource, and endpoint in a request.", "Label the parts of an example API URL.", "https://learning.postman.com/docs/getting-started/overview/"],
      ["HTTP requests and responses", "Read status codes, headers, and response bodies.", "Annotate a sample request and response.", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],
      ["HTTP methods: GET, POST, PUT, PATCH, DELETE", "Choose a method for reading, creating, replacing, updating, or removing data.", "Create a method-to-task reference table.", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"],
      ["JSON data", "Read and write objects, arrays, strings, numbers, and booleans.", "Write valid sample JSON for a contact record.", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON"],
      ["Endpoints, parameters, and pagination", "Identify path parameters, query parameters, and page controls.", "Design a paginated contact search request.", "https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request/"],
      ["Authentication and API keys", "Explain why API credentials must be protected.", "Write a credential-handling checklist; never put a real key in notes.", "https://learning.postman.com/docs/sending-requests/authorization/authorization/"],
      ["Bearer tokens", "Add a bearer token through an authorization header.", "Draft a placeholder request using a variable, not a real secret.", "https://learning.postman.com/docs/sending-requests/authorization/authorization/"],
      ["OAuth 2.0", "Explain authorization, scopes, access tokens, and consent.", "Draw a simplified OAuth authorization flow.", "https://learning.postman.com/docs/sending-requests/authorization/oauth-20/"],
      ["Requests and responses in Postman", "Send a safe request and inspect its response.", "Use a public practice API and record the status and fields returned.", "https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request/"],
      ["Webhooks and event-driven integrations", "Distinguish a webhook push from polling an API.", "Design a webhook payload for a new CRM contact event.", "https://learning.postman.com/docs/sending-requests/webhooks/"],
      ["API testing and collections", "Organize requests and check expected status and response fields.", "Create a small collection outline with a happy-path check.", "https://learning.postman.com/docs/collections/collections-overview/"],
      ["Connect CRM platforms with APIs", "Map records and fields between two CRM systems.", "Create a field mapping and duplicate-handling plan.", "https://learning.postman.com/"],
      ["GoHighLevel API integration", "Find current endpoints and choose supported authentication.", "Plan a read-only contact lookup using the current API docs.", "https://marketplace.gohighlevel.com/docs/"],
      ["Troubleshoot API errors", "Use status codes, validation messages, rate limits, and logs to diagnose issues.", "Write a checklist for 400, 401, 403, 404, 429, and 500 responses.", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"]
    ]),
    academyPath("seo", "SEO Specialist", "Practice search fundamentals, content, technical SEO, Search Console, and Analytics with free Google materials.", "search", "orange", [
      ["SEO fundamentals and search intent", "Explain crawling, indexing, ranking, and intent.", "Classify ten sample searches by intent.", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
      ["Keyword research and topic mapping", "Group related searches into useful content topics.", "Build a small keyword-to-page map using free search observations.", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
      ["On-page SEO and page structure", "Improve titles, headings, links, and page descriptions for people and search.", "Review one page and write a prioritized improvement list.", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
      ["Content quality and optimization", "Plan useful, original content that answers a visitor's need.", "Create a content brief with audience, intent, outline, and sources.", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"],
      ["Technical SEO and indexing", "Understand crawl access, indexing signals, sitemaps, and canonical URLs.", "Prepare a technical SEO audit checklist for a small site.", "https://developers.google.com/search/docs/crawling-indexing"],
      ["Website performance and mobile", "Review page experience and performance basics.", "Record three measurable optimization opportunities for a sample page.", "https://web.dev/learn/performance/"],
      ["Google Search Console", "Use search performance and indexing reports to ask useful questions.", "Create a weekly Search Console review checklist.", "https://search.google.com/search-console/about"],
      ["Google Analytics and measurement", "Define a conversion and choose a suitable measurement view.", "Draft a simple traffic and conversion report outline.", "https://skillshop.withgoogle.com/"]
    ]),
    academyPath("ai", "AI Support Specialist", "Learn AI fundamentals, prompting, support workflows, and practical business automation from free official materials.", "sparkles", "teal", [
      ["AI and generative AI fundamentals", "Describe what generative AI can do and where it can fail.", "Write a short human-reviewed AI use policy for a small business.", "https://academy.openai.com/"],
      ["Prompt structure and clear instructions", "Specify task, context, constraints, and desired output.", "Write and refine a prompt that summarizes a fictional support request.", "https://platform.openai.com/docs/guides/prompt-engineering"],
      ["Prompt iteration and evaluation", "Compare outputs against explicit quality criteria.", "Build a five-point checklist and evaluate two prompt versions.", "https://platform.openai.com/docs/guides/prompt-engineering"],
      ["AI-assisted customer support", "Draft helpful responses while protecting privacy and preserving human review.", "Create sample replies for three fictional customer questions.", "https://academy.openai.com/"],
      ["Triage, escalation, and safe handoff", "Recognize when a person should take over a conversation.", "Create a simple intent-to-escalation decision tree.", "https://academy.openai.com/"],
      ["AI workflows and automation", "Identify useful workflow steps and points that need human approval.", "Diagram a request-to-draft-to-review support workflow.", "https://platform.openai.com/docs/guides/agents"],
      ["ChatGPT for business operations", "Use AI to organize routine work without sharing sensitive data.", "Design a reusable weekly planning prompt using fictional data.", "https://academy.openai.com/"],
      ["Practical AI project", "Document an AI workflow, its limits, and how success is measured.", "Build a small FAQ assistant plan with test cases and escalation rules.", "https://platform.openai.com/docs/overview"]
    ]),
    academyPath("web", "Website Development & Technical Skills", "Build and troubleshoot websites with free HTML, CSS, JavaScript, WordPress, GitHub, and Codex resources.", "hub", "navy", [
      ["HTML structure and semantic elements", "Build a page structure with meaningful semantic HTML.", "Create a one-page outline with header, navigation, main, sections, and footer.", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"],
      ["CSS selectors, layout, and responsive design", "Style a readable responsive page using CSS layout tools.", "Create a small style guide and a mobile-first layout sketch.", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"],
      ["JavaScript fundamentals", "Use variables, functions, events, and basic DOM updates.", "Add a small interactive control to a practice page.", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"],
      ["Landing page development", "Organize a page around audience, value, evidence, and a clear call to action.", "Build a landing-page wireframe and content outline.", "https://www.freecodecamp.org/learn/2022/responsive-web-design/"],
      ["Website troubleshooting and browser tools", "Inspect layout, console errors, links, and mobile behavior.", "Write a repeatable page-check checklist.", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started"],
      ["WordPress fundamentals", "Explain pages, posts, themes, plugins, and safe update practices.", "Plan a simple WordPress site structure and backup routine.", "https://learn.wordpress.org/"],
      ["Elementor and page building", "Understand sections, containers, widgets, and responsive previews.", "Sketch a simple page using free documentation and a test layout.", "https://elementor.com/help/"],
      ["Website integrations and forms", "Map a website form to a destination and verify the visitor flow.", "Document a form-to-CRM field map and test checklist.", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"],
      ["Git and GitHub basics", "Explain repositories, commits, branches, and version history.", "Create a practice repository plan and write clear commit messages.", "https://docs.github.com/en/get-started/start-your-journey"],
      ["GitHub Pages publishing", "Describe how a static site is published from a repository.", "Prepare a checklist for updating and checking a GitHub Pages site.", "https://docs.github.com/en/pages/getting-started-with-github-pages"],
      ["Coding with Codex", "Give a coding agent a clear task, context, and review criteria.", "Write a small change request and review its proposed diff carefully.", "https://openai.com/codex/"]
    ])
  ];
  const ACADEMIES = ACADEMY_PATHS.flatMap((path) => path.lessons.map((lesson) => ({ ...lesson, name: lesson.title, category: path.id, icon: path.icon })));

  const ROUTINE_CATEGORIES = ["Learning", "Practical Project", "Job Applications", "Review", "Break / Personal", "GoHighLevel Learning", "CRM Learning", "API Learning", "SEO Learning", "AI Learning", "Website Development", "Church Activities", "Other"];
  const EVENT_CATEGORIES = [
    ["ghl", "GoHighLevel Learning"], ["crm", "CRM Learning"], ["api", "API Learning"], ["seo", "SEO Learning"], ["ai", "AI Learning"],
    ["web", "Website Development"], ["job", "Job Applications"], ["project", "Practical Projects"], ["personal", "Personal Schedule"], ["church", "Church Activities"], ["other", "Other"]
  ];
  const DEFAULT_ROUTINE = [
    { id: "routine-morning", activity: "Morning personal development and learning", startTime: "", endTime: "", days: [1, 2, 3, 4, 5, 6, 0], category: "Learning" },
    { id: "routine-tech", activity: "Technical lessons", startTime: "", endTime: "", days: [1, 2, 3, 4, 5, 6], category: "Learning" },
    { id: "routine-practice", activity: "Hands-on exercises and projects", startTime: "", endTime: "", days: [1, 2, 3, 4, 5, 6], category: "Practical Project" },
    { id: "routine-break", activity: "Breaks and personal time", startTime: "", endTime: "", days: [1, 2, 3, 4, 5, 6, 0], category: "Break / Personal" },
    { id: "routine-jobs", activity: "Job search and applications", startTime: "", endTime: "", days: [1, 2, 3, 4, 5], category: "Job Applications" },
    { id: "routine-evening", activity: "GoHighLevel, CRM, API, and portfolio practice", startTime: "", endTime: "", days: [1, 2, 3, 4, 5], category: "GoHighLevel Learning" },
    { id: "routine-review", activity: "Weekly review and plan the next week", startTime: "", endTime: "", days: [0], category: "Review" }
  ];

  const PROJECT_TEMPLATES = [
    { id: "seo-audit", title: "SEO Audit and Keyword Research", description: "Audit a sample website, build a keyword map, and document optimization opportunities.", skills: ["Technical SEO", "Keyword research", "Reporting"], tasks: ["Choose a sample website", "Complete the audit", "Build the keyword sheet", "Document findings"] },
    { id: "ghl-funnel", title: "GoHighLevel Lead Capture Funnel", description: "Create a focused lead capture experience connected to an organized CRM pipeline.", skills: ["Funnels", "Forms", "CRM"], tasks: ["Map the lead journey", "Build the landing page", "Connect the form", "Test the thank-you flow"] },
    { id: "ghl-workflow", title: "GoHighLevel Workflow Automation", description: "Build and test a follow-up workflow with clear triggers, actions, and safeguards.", skills: ["Automation", "Workflow logic", "Testing"], tasks: ["Define the trigger", "Build the workflow", "Add conditions", "Test sample contacts"] },
    { id: "hubspot-crm", title: "HubSpot CRM Setup", description: "Set up a sample CRM with useful properties, stages, and a clean contact structure.", skills: ["HubSpot", "Data organization", "Sales pipeline"], tasks: ["Create sample properties", "Set up pipeline stages", "Add sample records", "Review data quality"] },
    { id: "ai-support", title: "AI Customer Support Workflow", description: "Draft a support flow that classifies requests, suggests helpful replies, and escalates appropriately.", skills: ["Prompt engineering", "Customer support", "Human review"], tasks: ["Choose common inquiries", "Draft FAQ responses", "Define escalation rules", "Document human review"] }
  ];

  const APPLICATION_STATUSES = ["Interested", "Preparing", "Applied", "Interview", "Assessment", "Hired", "Rejected", "Follow-up needed"];
  const PROJECT_STATUSES = ["Not started", "In progress", "Completed", "On hold"];
  const NAV_ITEMS = [
    ["dashboard", "Dashboard"], ["learning", "My Learning Plan"], ["academy", "Learning Academy"],
    ["routine", "Daily Schedule"], ["calendar", "2027 Calendar"], ["applications", "Job Applications"], ["portfolio", "My Portfolio"],
    ["progress", "Progress Report"], ["settings", "Settings"]
  ];

  const ICONS = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h6"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1Z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M15 9h4v4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    workflow: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h3a2 2 0 0 1 2 2v5.5"/><path d="M12.5 11.5 15 14l2.5-2.5"/>',
    hub: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="m7 7.5 3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14ZM5 2l.7 1.8L7.5 4.5l-1.8.7L5 7l-.7-1.8-1.8-.7 1.8-.7L5 2Z"/>',
    graduation: '<path d="m2 10 10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
    lifeBuoy: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.3 4.3m5.6 5.6 4.3 4.3m0-14.2-4.3 4.3m-5.6 5.6-4.3 4.3"/>',
    badge: '<circle cx="12" cy="8" r="6"/><path d="m8.2 13-1.1 9 4.9-3 4.9 3-1.1-9"/><path d="m9.5 8 1.6 1.6L14.5 6"/>',
    mountain: '<path d="m3 20 7-14 4 8 2-4 5 10H3Z"/><path d="m8.4 9.2 2.5 1.8 2.4-1.8"/>',
    cloud: '<path d="M20 16.2A4 4 0 0 0 18 8.5a6 6 0 0 0-11.7 1.3A4 4 0 0 0 7 18h11a3 3 0 0 0 2-1.8Z"/><path d="m10 13-2 3h3l-1 3 4-5h-3l1-1"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    coffee: '<path d="M10 2v2m4-2v2M4 7h14v9a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V7Zm14 2h2a2 2 0 0 1 0 4h-2"/>',
    pencil: '<path d="m16 4 4 4L8 20H4v-4L16 4Z"/><path d="m14 6 4 4"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    calendarDays: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01"/>'
    ,database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'
  };

  const icon = (name, extraClass = "") => `<svg class="icon ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sparkles}</svg>`;
  const clone = (value) => JSON.parse(JSON.stringify(value));

  function initialState() {
    return {
      lessonStatus: {},
      routine: {},
      academyStudied: {},
      academyProgress: {},
      academyNotes: {},
      routineBlocks: clone(DEFAULT_ROUTINE),
      calendarEvents: [],
      reminderLog: [],
      firedReminders: [],
      notificationsEnabled: false,
      applications: [],
      projects: PROJECT_TEMPLATES.map((project) => ({ ...clone(project), startDate: "", targetDate: "", status: "Not started", checklist: {}, notes: "", evidence: null }))
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return initialState();
      const defaults = initialState();
      const storedProjects = Array.isArray(saved.projects) ? saved.projects : [];
      return {
        lessonStatus: saved.lessonStatus && typeof saved.lessonStatus === "object" ? saved.lessonStatus : {},
        routine: saved.routine && typeof saved.routine === "object" ? saved.routine : {},
        academyStudied: saved.academyStudied && typeof saved.academyStudied === "object" ? saved.academyStudied : {},
        academyProgress: saved.academyProgress && typeof saved.academyProgress === "object" ? saved.academyProgress : {},
        academyNotes: saved.academyNotes && typeof saved.academyNotes === "object" ? saved.academyNotes : {},
        routineBlocks: Array.isArray(saved.routineBlocks) ? saved.routineBlocks : clone(DEFAULT_ROUTINE),
        calendarEvents: Array.isArray(saved.calendarEvents) ? saved.calendarEvents : [],
        reminderLog: Array.isArray(saved.reminderLog) ? saved.reminderLog : [],
        firedReminders: Array.isArray(saved.firedReminders) ? saved.firedReminders : [],
        notificationsEnabled: Boolean(saved.notificationsEnabled),
        applications: Array.isArray(saved.applications) ? saved.applications : [],
        projects: defaults.projects.map((base) => {
          const stored = storedProjects.find((item) => item.id === base.id) || {};
          return { ...base, ...stored, checklist: { ...(stored.checklist || {}) } };
        })
      };
    } catch (error) {
      console.warn("Saved learning hub data could not be read.", error);
      return initialState();
    }
  }

  let state = loadState();
  let currentRoute = "dashboard";
  let calendarCursor = new Date(Date.UTC(2027, 0, 1));
  let calendarSelectedDate = "2027-01-01";
  let calendarView = "month";
  let toastTimer;

  function saveState(showError = true) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.error("Could not save learning hub data.", error);
      if (showError) showToast("Browser storage is full. Remove a large screenshot and try again.", "error");
      return false;
    }
  }

  function todayKey() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
  }

  function programDate(day) {
    return new Date(PROGRAM_YEAR, 0, day);
  }

  function formatDate(date, options = { month: "short", day: "numeric", year: "numeric" }) {
    return new Intl.DateTimeFormat("en-US", { ...options, timeZone: "Asia/Manila" }).format(date);
  }

  function daysUntilStart() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = programDate(1);
    start.setHours(0, 0, 0, 0);
    return Math.round((start - today) / 86400000);
  }

  function greeting() {
    const hour = Number(new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "numeric", hour12: false }).format(new Date()));
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }

  function counts() {
    const totalLessons = LESSONS.reduce((sum, day) => sum + day.tasks.length, 0);
    const completedLessons = LESSONS.reduce((sum, day) => sum + day.tasks.reduce((n, _, index) => n + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0), 0);
    const completedDays = LESSONS.reduce((sum, day) => sum + (day.tasks.every((_, index) => state.lessonStatus[`d${day.day}-l${index}`]) ? 1 : 0), 0);
    const completedProjects = state.projects.filter((project) => project.status === "Completed").length;
    const studiedResources = ACADEMIES.filter((lesson) => state.academyProgress[lesson.id]).length;
    const todayRoutine = state.routine[todayKey()] || {};
    const weekday = new Date(`${todayKey()}T12:00:00+08:00`).getUTCDay();
    const todaysBlocks = state.routineBlocks.filter((item) => (item.days || []).includes(weekday));
    const completedRoutine = todaysBlocks.reduce((sum, item) => sum + (todayRoutine[item.id] ? 1 : 0), 0);
    const submittedStatuses = new Set(["Applied", "Interview", "Assessment", "Hired", "Rejected", "Follow-up needed"]);
    const applicationsSubmitted = state.applications.filter((application) => submittedStatuses.has(application.status)).length;
    const trackCounts = Object.fromEntries(TRACKS.map((track) => {
      const path = ACADEMY_PATHS.find((item) => item.id === track.id);
      return [track.id, { total: path?.lessons.length || 0, completed: path?.lessons.filter((lesson) => state.academyProgress[lesson.id]).length || 0 }];
    }));
    return { totalLessons, completedLessons, completedDays, completedProjects, studiedResources, totalAcademyLessons: ACADEMIES.length, completedRoutine, totalRoutine: todaysBlocks.length, applicationsSubmitted, trackCounts };
  }

  function percentage(done, total) {
    return total ? Math.round((done / total) * 100) : 0;
  }

  function safeHref(value) {
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }

  function showToast(message, kind = "success") {
    const region = document.getElementById("toast-region");
    if (!region) return;
    region.innerHTML = `<div class="toast toast-${kind}"><span class="toast-icon">${icon(kind === "error" ? "close" : "check")}</span><span>${escapeHtml(message)}</span></div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { region.innerHTML = ""; }, 3200);
  }

  function topLevelHeader(eyebrow, title, description, actions = "") {
    return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
  }

  function progressBar(value, tone = "emerald", label = "Progress") {
    return `<div class="progress-track" role="progressbar" aria-label="${escapeHtml(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span class="progress-fill ${tone}" style="width:${value}%"></span></div>`;
  }

  function metricCard(iconName, label, value, note, tone = "blue") {
    return `<article class="metric-card"><div class="metric-icon ${tone}">${icon(iconName)}</div><div class="metric-copy"><span class="metric-label">${label}</span><strong>${value}</strong><span class="metric-note">${note}</span></div></article>`;
  }

  function isoDateUTC(date) {
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
  }

  function dateInManila(dateKey, hour = 12) {
    return new Date(`${dateKey}T${String(hour).padStart(2, "0")}:00:00+08:00`);
  }

  function activeRoutineBlocks(dateKey) {
    const weekday = dateInManila(dateKey).getUTCDay();
    return state.routineBlocks.filter((item) => (item.days || []).includes(weekday)).slice().sort((a, b) => (a.startTime || "99:99").localeCompare(b.startTime || "99:99"));
  }

  function routineTime(item) {
    if (!item.startTime && !item.endTime) return "Flexible time";
    const showTime = (value) => value ? new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit" }).format(new Date(`2027-01-01T${value}:00+08:00`)) : "Set time";
    return `${showTime(item.startTime)}${item.endTime ? ` – ${showTime(item.endTime)}` : ""}`;
  }

  function daysLabel(days = []) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].filter((_, index) => days.includes(index)).join(", ") || "No days selected";
  }

  function eventOccursOn(event, dateKey) {
    if (!event.date || dateKey < event.date) return false;
    if (!event.recurrence || event.recurrence === "none") return event.date === dateKey;
    const start = new Date(`${event.date}T12:00:00+08:00`);
    const date = new Date(`${dateKey}T12:00:00+08:00`);
    const dayDifference = Math.floor((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate())) / 86400000);
    if (event.recurrence === "daily") return true;
    if (event.recurrence === "weekly") return dayDifference % 7 === 0;
    if (event.recurrence === "monthly") return new Date(`${dateKey}T12:00:00+08:00`).getUTCDate() === start.getUTCDate();
    return false;
  }

  function eventsForDate(dateKey) {
    return state.calendarEvents.filter((event) => eventOccursOn(event, dateKey)).sort((a, b) => (a.startTime || "").localeCompare(b.startTime || ""));
  }

  function eventCategoryName(category) {
    return EVENT_CATEGORIES.find(([id]) => id === category)?.[1] || "Other";
  }

  function eventTime(event) {
    const showTime = (value) => value ? new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit" }).format(new Date(`2027-01-01T${value}:00+08:00`)) : "Time not set";
    return `${showTime(event.startTime)}${event.endTime ? ` – ${showTime(event.endTime)}` : ""}`;
  }

  function upcomingEvents(limit = 5) {
    const today = todayKey();
    const first = today < "2027-01-01" ? "2027-01-01" : today;
    const cursor = new Date(`${first}T12:00:00+08:00`);
    const results = [];
    for (let offset = 0; offset < 366 && results.length < limit; offset += 1) {
      const date = new Date(cursor.getTime() + offset * 86400000);
      const dateKey = isoDateUTC(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())));
      if (!dateKey.startsWith("2027-")) break;
      eventsForDate(dateKey).forEach((event) => { if (results.length < limit) results.push({ event, date: formatDate(dateInManila(dateKey), { month: "short", day: "numeric" }) }); });
    }
    return results;
  }

  function unreadReminderCount() {
    return state.reminderLog.filter((item) => !item.read).length;
  }

  function notificationButtonLabel() {
    if (typeof Notification === "undefined") return "Notifications unavailable";
    if (Notification.permission === "denied") return "Notifications blocked in browser settings";
    return state.notificationsEnabled && Notification.permission === "granted" ? "Disable Notifications" : "Enable Notifications";
  }

  function renderAgendaItems(items, emptyText) {
    if (!items.length) return `<p class="empty-copy">${escapeHtml(emptyText)}</p>`;
    return `<div class="agenda-item-list">${items.map((item) => {
      const categoryClass = String(item.category || "Other").toLowerCase().replace(/[^a-z]+/g, "-");
      return `<div class="agenda-item"><span class="agenda-category-dot category-${categoryClass}"></span><span class="agenda-item-main"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.category || "Schedule")}</small></span><span class="agenda-item-time">${escapeHtml(item.time || "Flexible time")}</span>${item.done ? '<span class="agenda-done">Done</span>' : ""}${item.eventId ? `<button class="text-button" data-action="edit-event" data-id="${escapeHtml(item.eventId)}">Edit</button>` : ""}</div>`;
    }).join("")}</div>`;
  }

  function trackCard(track) {
    const c = counts().trackCounts[track.id];
    const pct = percentage(c.completed, c.total);
    return `<article class="track-card">
      <div class="track-card-top"><div class="track-icon ${track.tone}">${icon(track.icon)}</div><span class="track-percent" data-track-percent="${escapeHtml(track.id)}">${pct}%</span></div>
      <h3>${track.title}</h3><p>${track.description}</p>
      <div class="track-progress-copy"><span><strong data-track-done="${escapeHtml(track.id)}">${c.completed}</strong> of <span data-track-total="${escapeHtml(track.id)}">${c.total}</span> lessons</span><span data-track-pct-copy="${escapeHtml(track.id)}">${pct}%</span></div>
      ${progressBar(pct, track.tone, `${track.title} progress`)}
      <button class="text-button track-open" data-route="academy" data-track="${escapeHtml(track.id)}">Open learning path <span aria-hidden="true">→</span></button>
    </article>`;
  }

  function renderDashboard() {
    const c = counts();
    const submitted = c.applicationsSubmitted;
    const todayBlocks = activeRoutineBlocks(todayKey());
    const todayEvents = eventsForDate(todayKey());
    const upcoming = upcomingEvents(3);
    const reminderAction = `<button class="button button-outline notification-bell" data-action="scroll-reminders" aria-label="Notification bell, ${unreadReminderCount()} unread reminders">${icon("bell")} Reminders <span class="notification-count">${unreadReminderCount()}</span></button>`;
    return `${topLevelHeader("YOUR LEARNING SPACE", `${greeting()}, Gabriel!`, "Your learning, schedule, projects, and job search in one place.", reminderAction)}
      <section class="hero-progress card">
        <div class="hero-progress-copy"><div class="hero-title-line"><div class="hero-icon">${icon("calendarDays")}</div><div><span class="eyebrow">YOUR SELF-PACED LEARNING PATHS</span><h2>Learning Progress</h2></div></div>
          <p>Small steps, steady practice, and a portfolio you can show with confidence.</p>
          <div class="hero-progress-foot"><span><strong data-value="studiedResources">${c.studiedResources}</strong> / ${c.totalAcademyLessons} academy lessons completed</span><span>Asia/Manila schedule</span></div>
        </div>
        <div class="hero-progress-score"><strong data-value="academyPercent">${percentage(c.studiedResources, c.totalAcademyLessons)}%</strong><span>academy progress</span>${progressBar(percentage(c.studiedResources, c.totalAcademyLessons), "emerald", "Academy learning progress")}</div>
      </section>
      <section class="metric-grid" aria-label="Learning overview">
        ${metricCard("book", "Academy lessons", `<span data-value="studiedResources">${c.studiedResources}</span><small> / ${c.totalAcademyLessons}</small>`, "Across six learning paths", "green")}
        ${metricCard("calendarDays", "Today’s routine", `<span data-value="completedRoutine">${c.completedRoutine}</span><small> / <span data-value="totalRoutine">${c.totalRoutine}</span></small>`, "Your editable weekly plan", "blue")}
        ${metricCard("briefcase", "Applications submitted", `<span data-value="applicationsSubmitted">${submitted}</span>`, "Tracked in your job pipeline", "purple")}
        ${metricCard("layers", "Projects completed", `<span data-value="completedProjects">${c.completedProjects}</span><small> / 5</small>`, "Portfolio projects marked complete", "orange")}
      </section>
      <section class="section-block"><div class="section-heading"><div><div class="eyebrow">YOUR LEARNING PATHS</div><h2>Build skills that move you forward</h2></div><button class="text-button" data-route="academy">Open Learning Academy <span aria-hidden="true">→</span></button></div>
        <div class="track-grid">${TRACKS.map(trackCard).join("")}</div>
      </section>
      <section class="dashboard-agenda-grid section-block">
        <article class="card dashboard-agenda-card"><div class="section-heading"><div><div class="eyebrow">${escapeHtml(formatDate(new Date(`${todayKey()}T12:00:00+08:00`), { weekday: "long", month: "long", day: "numeric" }))}</div><h2>Today’s learning schedule</h2></div><button class="text-button" data-route="routine">Edit routine →</button></div>${renderAgendaItems(todayBlocks.map((block) => ({ title: block.activity, time: routineTime(block), category: block.category, done: Boolean((state.routine[todayKey()] || {})[block.id]) })), "Your weekly routine is clear today.")}</article>
        <article class="card dashboard-agenda-card"><div class="section-heading"><div><div class="eyebrow">PERSONAL SCHEDULE</div><h2>Today’s calendar</h2></div><button class="text-button" data-route="calendar">Open 2027 Calendar →</button></div>${renderAgendaItems(todayEvents.map((entry) => ({ title: entry.event.title, time: eventTime(entry.event), category: eventCategoryName(entry.event.category) })), "No calendar events today.")}</article>
      </section>
      <section class="card reminder-panel section-block" id="reminder-panel"><div class="section-heading"><div><div class="eyebrow">REMINDERS</div><h2>Upcoming schedules</h2></div><button class="button button-outline" data-action="enable-notifications">${icon("bell")} ${notificationButtonLabel()}</button></div><p class="muted-copy">Browser alerts work while this site is open. A closed GitHub Pages site cannot schedule reliable push alerts: that needs a backend with push subscriptions and a scheduled worker. Browsers may also delay alerts if they suspend this tab.</p>${typeof Notification === "undefined" ? '<p class="muted-copy">This browser does not support the Notifications API. In-app schedule reminders remain available while the page is open.</p>' : Notification.permission === "denied" ? '<p class="notification-help">Notifications are blocked. Allow them in this site’s browser settings, then return here and enable them.</p>' : ""}${upcoming.length ? renderAgendaItems(upcoming.map(({ event, date }) => ({ title: event.title, time: `${date} · ${eventTime(event)}`, category: eventCategoryName(event.category), eventId: event.id })), "No upcoming reminders are scheduled.") : '<p class="empty-copy">No upcoming calendar events.</p>'}<div class="reminder-inbox"><div class="section-heading"><div><div class="eyebrow">NOTIFICATION INBOX · ${unreadReminderCount()} UNREAD</div><h3>Recent reminders</h3></div>${unreadReminderCount() ? '<button class="text-button" data-action="mark-reminders-read">Mark all read</button>' : ""}</div>${renderReminderLog()}</div></section>
      <section class="bottom-grid">
        <article class="next-step-card card"><div class="next-step-icon">${icon("sparkles")}</div><div><div class="eyebrow">A GOOD PLACE TO START</div><h3>Continue your learning</h3><p>Pick up at the next unchecked lesson in one of the six skill paths.</p><button class="button button-primary" data-action="continue-academy">Continue learning <span aria-hidden="true">→</span></button></div></article>
        <article class="academy-callout card"><div class="callout-icon">${icon("calendar")}</div><div class="eyebrow">MAKE IT YOURS</div><h3>Plan any part of your week</h3><p>Add learning, projects, applications, church, or personal events to your 2027 calendar.</p><button class="button button-secondary" data-route="calendar">Open 2027 Calendar</button></article>
      </section>`;
  }

  function renderLearning() {
    const c = counts();
    return `${topLevelHeader("YOUR FLEXIBLE STARTING ROADMAP", "My Learning Plan", "A 30-session checklist you can follow at your own pace, pause, or revisit. It has no calendar dates.", `<div class="mini-total"><strong data-value="completedLessons">${c.completedLessons}</strong><span> / <span data-value="totalLessons">${c.totalLessons}</span> tasks</span></div>`)}
      <section class="plan-summary card"><div><span class="eyebrow">SELF-PACED ROADMAP</span><h2><span data-value="overallPercent">${percentage(c.completedLessons, c.totalLessons)}%</span> of roadmap tasks complete</h2><p><span data-value="completedDays">${c.completedDays}</span> sessions fully complete</p></div><div class="plan-summary-progress">${progressBar(percentage(c.completedLessons, c.totalLessons), "emerald", "Learning plan progress")}</div></section>
      <div class="phase-intro"><div class="eyebrow">THE 30-SESSION ROADMAP</div><p>Open a session to see its tasks. Check-offs save automatically in this browser; use the Learning Academy for the full interactive paths.</p><button class="button button-outline" data-route="academy">Open Learning Academy →</button></div>
      <div class="phase-list">${PHASES.map((phase) => {
        const days = LESSONS.filter((day) => day.day >= phase.start && day.day <= phase.end);
        return `<section class="phase-section"><div class="phase-heading"><div class="phase-marker ${phase.tone}"></div><div><h2>${phase.title}</h2><span>${phase.range} <span class="separator-dot">·</span> ${days.length} days</span></div></div>
          <div class="day-list">${days.map((day) => renderDay(day, phase.tone)).join("")}</div></section>`;
      }).join("")}</div>`;
  }

  function renderDay(day, tone) {
    const done = day.tasks.reduce((sum, _, index) => sum + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0);
    const complete = done === day.tasks.length;
    const dayLabel = complete ? "Complete" : `${day.tasks.length - done} to go`;
    return `<details class="day-card" data-day="${day.day}" data-day-track="${escapeHtml(day.track)}">
      <summary><span class="day-number ${tone} ${complete ? "is-complete" : ""}">${complete ? icon("check") : String(day.day).padStart(2, "0")}</span><span class="day-summary-main"><span class="day-date">SESSION ${String(day.day).padStart(2, "0")}</span><strong>${day.title}</strong></span><span class="day-track-tag">${escapeHtml(day.track === "Career" ? "Career" : day.track)}</span><span class="day-progress"><strong data-day-done="${day.day}">${done}</strong> / ${day.tasks.length}<span class="day-progress-label"> complete</span></span><span class="day-status ${complete ? "is-complete" : ""}" data-day-status="${day.day}">${dayLabel}</span><span class="chevron" aria-hidden="true">⌄</span></summary>
      <div class="day-details"><div class="day-detail-header"><span>LESSONS & ACTIVITIES</span><span>CHECK OFF AS YOU GO</span></div><div class="lesson-list">${day.tasks.map((task, index) => {
        const id = `d${day.day}-l${index}`;
        const checked = state.lessonStatus[id] ? "checked" : "";
        return `<label class="lesson-row ${checked ? "is-checked" : ""}"><input type="checkbox" data-lesson="${id}" data-day-id="${day.day}" ${checked} aria-label="Mark ${escapeHtml(task)} complete"><span class="custom-check" aria-hidden="true">${icon("check")}</span><span>${escapeHtml(task)}</span></label>`;
      }).join("")}</div></div></details>`;
  }

  function renderAcademy() {
    const c = counts();
    const actions = `<span class="studied-summary">${icon("check")} <strong data-value="studiedResources">${c.studiedResources}</strong> / ${ACADEMIES.length} complete</span><button class="button button-primary" data-action="continue-academy">Continue learning →</button>`;
    return `${topLevelHeader("FREE OFFICIAL MATERIALS", "Learning Academy", "Six ordered skill paths with free lessons, objectives, practice assignments, notes, and saved progress.", actions)}
      <div class="resource-note"><span class="resource-note-icon">${icon("sparkles")}</span><p>These paths link to free official documentation and learning materials. Some platforms may offer separate paid products; the linked lesson materials are free to read or access.</p></div>
      ${ACADEMY_PATHS.map(renderAcademyPath).join("")}`;
  }

  function renderAcademyPath(path, index) {
    const progress = path.lessons.filter((lesson) => state.academyProgress[lesson.id]).length;
    const pct = percentage(progress, path.lessons.length);
    return `<section class="academy-path section-block" data-academy-path="${path.id}"><details class="academy-path-details" ${index === 0 ? "open" : ""}><summary class="academy-path-heading"><span class="track-icon ${path.tone}">${icon(path.icon)}</span><span class="academy-path-title"><span class="eyebrow">LEARNING PATH ${index + 1}</span><strong>${escapeHtml(path.title)}</strong><small>${escapeHtml(path.description)}</small></span><span class="academy-path-count"><b data-path-done="${path.id}">${progress}</b> / ${path.lessons.length} lessons</span><span class="academy-path-percent" data-path-percent="${path.id}">${pct}%</span><span class="chevron">⌄</span></summary><div class="academy-path-content">${progressBar(pct, path.tone, `${path.title} progress`)}<div class="academy-lesson-list">${path.lessons.map((lesson, lessonIndex) => renderAcademyLesson(path, lesson, lessonIndex)).join("")}</div></div></details></section>`;
  }

  function renderAcademyLesson(path, lesson, index) {
    const done = Boolean(state.academyProgress[lesson.id]);
    return `<article class="academy-lesson ${done ? "academy-lesson-done" : ""}" id="academy-lesson-${lesson.id}" data-academy-lesson="${lesson.id}"><div class="academy-lesson-check"><label class="lesson-row"><input type="checkbox" data-academy-progress="${lesson.id}" data-academy-path-id="${path.id}" ${done ? "checked" : ""} aria-label="Mark ${escapeHtml(lesson.title)} complete"><span class="custom-check" aria-hidden="true">${icon("check")}</span></label></div><div class="academy-lesson-body"><div class="academy-lesson-kicker">LESSON ${String(index + 1).padStart(2, "0")}</div><h3>${escapeHtml(lesson.title)}</h3><p>${escapeHtml(lesson.description)}</p><p><strong>Objective:</strong> ${escapeHtml(lesson.objective)}</p><p class="academy-assignment"><strong>Practical assignment:</strong> ${escapeHtml(lesson.assignment)}</p><div class="academy-lesson-actions"><a class="button button-outline" href="${escapeHtml(lesson.url)}" target="_blank" rel="noopener noreferrer">Open free material ${icon("arrow")}</a><label class="academy-complete-label"><input type="checkbox" data-academy-progress="${lesson.id}" data-academy-path-id="${path.id}" ${done ? "checked" : ""}> Mark lesson complete</label></div><label class="form-field academy-notes"><span>MY NOTES</span><textarea rows="2" maxlength="2000" placeholder="Save notes or what you learned…" data-academy-note="${lesson.id}">${escapeHtml(state.academyNotes[lesson.id] || "")}</textarea></label></div></article>`;
  }

  function renderRoutine() {
    const c = counts();
    const blocks = activeRoutineBlocks(todayKey());
    const action = `<button class="button button-primary" data-action="add-routine">${icon("plus")} Add routine block</button>`;
    return `${topLevelHeader("REPEATABLE WEEKLY PLAN", "My Daily Routine", "Choose which days each activity repeats and add times only when they suit you. Every block is editable.", action)}
      <section class="routine-summary card"><div class="routine-summary-icon">${icon("clock")}</div><div><span class="eyebrow">TODAY · ASIA/MANILA</span><h2><span data-routine-done>${c.completedRoutine}</span> of <span data-value="totalRoutine">${c.totalRoutine}</span> activities complete</h2><p>Today’s check-offs reset each day. Your weekly schedule remains saved.</p></div><div class="routine-summary-bar">${progressBar(percentage(c.completedRoutine, c.totalRoutine), "blue", "Today's routine progress")}</div></section>
      <div class="routine-week-selector">${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => `<span class="weekday-chip ${((new Date(`${todayKey()}T12:00:00+08:00`).getUTCDay() + 6) % 7) === i ? "is-today" : ""}">${day.slice(0, 3)}</span>`).join("")}</div>
      <section class="routine-list" aria-label="Today’s weekly schedule">${blocks.length ? blocks.map((item, index) => {
        const done = Boolean((state.routine[todayKey()] || {})[item.id]);
        return `<article class="routine-item ${done ? "routine-done" : ""}"><div class="routine-time">${escapeHtml(routineTime(item))}</div><div class="routine-timeline"><span class="routine-dot"></span>${index < blocks.length - 1 ? '<span class="routine-line"></span>' : ""}</div><div class="routine-activity-icon">${icon(routineIcon(item.category))}</div><div class="routine-copy"><strong>${escapeHtml(item.activity)}</strong><span>${escapeHtml(item.category)}</span></div><label class="routine-check-label"><input type="checkbox" data-routine="${escapeHtml(item.id)}" ${done ? "checked" : ""} aria-label="Mark ${escapeHtml(item.activity)} complete"><span class="custom-check" aria-hidden="true">${icon("check")}</span><span class="sr-only">Complete</span></label><div class="routine-actions"><button class="icon-button small-action" data-action="edit-routine" data-id="${escapeHtml(item.id)}" aria-label="Edit ${escapeHtml(item.activity)}">${icon("edit")}</button><button class="icon-button small-action danger-action" data-action="delete-routine" data-id="${escapeHtml(item.id)}" aria-label="Delete ${escapeHtml(item.activity)}">${icon("close")}</button></div></article>`;
      }).join("") : '<div class="empty-state"><h3>No routine blocks for today</h3><p>Add a block or edit your other weekly days.</p><button class="button button-primary" data-action="add-routine">Add routine block</button></div>'}</section>
      <section class="weekly-routine-editor card"><div class="section-heading"><div><div class="eyebrow">YOUR REPEATING WEEK</div><h2>All routine blocks</h2></div><span class="muted-copy">Times are optional and editable.</span></div><div class="weekly-block-list">${state.routineBlocks.map((item) => `<div class="weekly-block-row"><strong>${escapeHtml(item.activity)}</strong><span>${escapeHtml(daysLabel(item.days))}</span><span>${escapeHtml(routineTime(item))}</span><button class="text-button" data-action="edit-routine" data-id="${escapeHtml(item.id)}">Edit</button></div>`).join("")}</div></section>
      <dialog class="routine-dialog" id="routine-dialog" aria-labelledby="routine-dialog-title"><form id="routine-form" method="dialog"><div class="dialog-heading"><div><div class="eyebrow">WEEKLY ROUTINE</div><h2 id="routine-dialog-title">Add routine block</h2></div><button type="button" class="icon-button" data-action="close-routine-dialog" aria-label="Close dialog">${icon("close")}</button></div><input type="hidden" name="id"><div class="form-grid"><label class="form-field form-span-2"><span>Activity <b>*</b></span><input required name="activity" maxlength="140" placeholder="For example, API lesson practice"></label><label class="form-field"><span>Start time (optional)</span><input name="startTime" type="time"></label><label class="form-field"><span>End time (optional)</span><input name="endTime" type="time"></label><label class="form-field form-span-2"><span>Category</span><select name="category">${ROUTINE_CATEGORIES.map((category) => `<option>${escapeHtml(category)}</option>`).join("")}</select></label><fieldset class="form-field form-span-2 weekdays-field"><legend>Repeat on</legend>${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => `<label><input type="checkbox" name="days" value="${index}"><span>${day}</span></label>`).join("")}</fieldset></div><div class="dialog-actions"><button type="button" class="button button-ghost" data-action="close-routine-dialog">Cancel</button><button type="submit" class="button button-primary">Save routine block</button></div></form></dialog>`;
  }

  function routineIcon(category) {
    if (/job/i.test(category)) return "briefcase";
    if (/project/i.test(category)) return "layers";
    if (/break|personal|church/i.test(category)) return "coffee";
    if (/review/i.test(category)) return "chart";
    if (/API|CRM|HighLevel|website|SEO|AI/i.test(category)) return "workflow";
    return "book";
  }

  function openRoutineDialog(block = null) {
    const dialog = document.getElementById("routine-dialog");
    const form = document.getElementById("routine-form");
    if (!dialog || !form) return;
    form.reset();
    form.elements.id.value = block?.id || "";
    form.elements.activity.value = block?.activity || "";
    form.elements.startTime.value = block?.startTime || "";
    form.elements.endTime.value = block?.endTime || "";
    form.elements.category.value = block?.category || "Learning";
    const selectedDays = block?.days || [];
    form.querySelectorAll('input[name="days"]').forEach((input) => { input.checked = selectedDays.includes(Number(input.value)); });
    document.getElementById("routine-dialog-title").textContent = block ? "Edit routine block" : "Add routine block";
    dialog.showModal();
  }

  function renderReminderLog() {
    const items = state.reminderLog.slice(0, 5);
    if (!items.length) return '<p class="empty-copy">Your reminder inbox is clear.</p>';
    return `<div class="reminder-log-list">${items.map((item) => `<div class="reminder-log-item ${item.read ? "is-read" : ""}"><span class="agenda-category-dot category-${escapeHtml(state.calendarEvents.find((event) => event.id === item.eventId)?.category || "other")}"></span><span><strong>${escapeHtml(item.title)}</strong><small>${item.missed ? "Missed reminder" : "Reminder"} · ${escapeHtml(formatDate(dateInManila(item.date), { month: "short", day: "numeric" }))}</small></span>${item.read ? '<span class="reminder-read-label">Read</span>' : `<button class="text-button" data-action="mark-reminder-read" data-id="${escapeHtml(item.id)}">Mark read</button>`}</div>`).join("")}</div>`;
  }

  function calendarTitle() {
    if (calendarView === "month") return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(calendarCursor);
    const start = calendarView === "week" ? new Date(calendarCursor.getTime() - calendarCursor.getUTCDay() * 86400000) : new Date(`${calendarSelectedDate}T12:00:00+08:00`);
    if (calendarView === "day") return formatDate(dateInManila(calendarSelectedDate), { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    const end = new Date(start.getTime() + 6 * 86400000);
    return `${formatDate(dateInManila(isoDateUTC(start)), { month: "short", day: "numeric" })} – ${formatDate(dateInManila(isoDateUTC(end)), { month: "short", day: "numeric", year: "numeric" })}`;
  }

  function calendarMonthView() {
    const year = calendarCursor.getUTCFullYear();
    const month = calendarCursor.getUTCMonth();
    const firstDay = new Date(Date.UTC(year, month, 1));
    const monthLength = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const startOffset = firstDay.getUTCDay();
    const cells = Math.ceil((startOffset + monthLength) / 7) * 7;
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateCells = Array.from({ length: cells }, (_, cellIndex) => {
      const dayNumber = cellIndex - startOffset + 1;
      if (dayNumber < 1 || dayNumber > monthLength) return '<div class="calendar-day-cell is-empty" aria-hidden="true"></div>';
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
      const dateEvents = eventsForDate(dateKey);
      const today = dateKey === todayKey();
      const selected = dateKey === calendarSelectedDate;
      return `<div class="calendar-day-cell ${today ? "is-today" : ""} ${selected ? "is-selected" : ""}"><button class="calendar-date-button" data-calendar-date="${dateKey}" aria-label="Select ${escapeHtml(formatDate(dateInManila(dateKey), { weekday: "long", month: "long", day: "numeric" }))}"><span>${dayNumber}</span>${today ? '<small>TODAY</small>' : ""}</button><div class="calendar-event-stack">${dateEvents.slice(0, 3).map((event) => `<button class="calendar-event-chip category-${escapeHtml(event.category || "other")}" data-action="edit-event" data-id="${escapeHtml(event.id)}" title="${escapeHtml(`${eventTime(event)} · ${event.title}`)}"><span>${escapeHtml(event.startTime || "")}</span>${escapeHtml(event.title)}</button>`).join("")}${dateEvents.length > 3 ? `<span class="calendar-more">+${dateEvents.length - 3} more</span>` : ""}</div><button class="calendar-add-mini" data-action="add-event" data-date="${dateKey}" aria-label="Add schedule for ${dateKey}">${icon("plus")}</button></div>`;
    }).join("");
    return `<div class="calendar-month-grid"><div class="calendar-weekdays">${weekdayNames.map((day) => `<span>${day}</span>`).join("")}</div><div class="calendar-month-cells">${dateCells}</div></div>`;
  }

  function calendarWeekView() {
    const selected = new Date(`${calendarSelectedDate}T12:00:00+08:00`);
    const sunday = new Date(Date.UTC(selected.getUTCFullYear(), selected.getUTCMonth(), selected.getUTCDate() - selected.getUTCDay()));
    return `<div class="calendar-week-grid">${Array.from({ length: 7 }, (_, offset) => {
      const date = new Date(sunday.getTime() + offset * 86400000);
      const dateKey = isoDateUTC(date);
      const inYear = dateKey.startsWith("2027-");
      return `<section class="calendar-week-day ${dateKey === todayKey() ? "is-today" : ""} ${!inYear ? "outside-year" : ""}"><button class="calendar-week-date" ${inYear ? `data-calendar-date="${dateKey}"` : "disabled"}><span>${new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "UTC" }).format(date)}</span><strong>${date.getUTCDate()}</strong></button>${inYear ? renderCalendarEvents(dateKey) : ""}${inYear ? `<button class="button button-outline calendar-add-button" data-action="add-event" data-date="${dateKey}">${icon("plus")} Add</button>` : ""}</section>`;
    }).join("")}</div>`;
  }

  function renderCalendarEvents(dateKey) {
    const events = eventsForDate(dateKey);
    return events.length ? `<div class="calendar-event-list">${events.map((event) => `<article class="calendar-event-card category-${escapeHtml(event.category || "other")}"><span class="calendar-event-time">${escapeHtml(eventTime(event))}</span><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(eventCategoryName(event.category))}${event.recurrence !== "none" ? ` · ${escapeHtml(event.recurrence)}` : ""}</small><div class="calendar-event-actions"><button class="text-button" data-action="edit-event" data-id="${escapeHtml(event.id)}">Edit</button><button class="text-button danger-text" data-action="delete-event" data-id="${escapeHtml(event.id)}">Delete</button></div></article>`).join("")}</div>` : '<p class="calendar-empty-day">Nothing scheduled</p>';
  }

  function calendarDayView() {
    return `<section class="calendar-selected-day"><div class="calendar-selected-heading"><div><div class="eyebrow">DAILY SCHEDULE · ASIA/MANILA</div><h2>${escapeHtml(calendarTitle())}</h2></div><button class="button button-primary" data-action="add-event" data-date="${calendarSelectedDate}">${icon("plus")} Add Schedule</button></div>${renderCalendarEvents(calendarSelectedDate)}</section>`;
  }

  function renderCalendar() {
    const navActions = `<div class="calendar-toolbar"><div class="calendar-move-controls"><button class="icon-button" data-action="calendar-prev" aria-label="Previous ${calendarView}">←</button><button class="button button-outline" data-action="calendar-today">Today</button><button class="icon-button" data-action="calendar-next" aria-label="Next ${calendarView}">→</button><h2 class="calendar-title">${escapeHtml(calendarTitle())}</h2></div><div class="calendar-view-tabs">${["month", "week", "day"].map((view) => `<button class="calendar-view-tab ${calendarView === view ? "active" : ""}" data-calendar-view="${view}">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}</div></div>`;
    const addAction = `<button class="button button-primary" data-action="add-event" data-date="${calendarSelectedDate}">${icon("plus")} Add Schedule</button>`;
    return `${topLevelHeader("PERSONAL AND LEARNING SCHEDULES", "2027 Calendar", "Plan learning, job applications, projects, church, and personal events. Event times and reminders use Asia/Manila.", addAction)}
      <section class="calendar-card card"><div class="calendar-toolbar-row">${navActions}</div>${calendarView === "month" ? calendarMonthView() : calendarView === "week" ? calendarWeekView() : calendarDayView()}</section>
      <section class="calendar-category-legend section-block"><div class="eyebrow">EVENT CATEGORIES</div><div class="category-legend-list">${EVENT_CATEGORIES.map(([id, name]) => `<span><i class="agenda-category-dot category-${id}"></i>${escapeHtml(name)}</span>`).join("")}</div></section>
      <dialog class="event-dialog" id="event-dialog" aria-labelledby="event-dialog-title"><form id="event-form" method="dialog"><div class="dialog-heading"><div><div class="eyebrow">2027 CALENDAR · ASIA/MANILA</div><h2 id="event-dialog-title">Add schedule</h2></div><button type="button" class="icon-button" data-action="close-event-dialog" aria-label="Close dialog">${icon("close")}</button></div><input type="hidden" name="id"><div class="form-grid"><label class="form-field form-span-2"><span>Title <b>*</b></span><input required name="title" maxlength="140" placeholder="What is scheduled?"></label><label class="form-field form-span-2"><span>Description</span><textarea name="description" rows="3" maxlength="1600" placeholder="Details, location, or notes"></textarea></label><label class="form-field"><span>Date <b>*</b></span><input required name="date" type="date" min="2027-01-01" max="2027-12-31"></label><label class="form-field"><span>Category</span><select name="category">${EVENT_CATEGORIES.map(([id, name]) => `<option value="${id}">${escapeHtml(name)}</option>`).join("")}</select></label><label class="form-field"><span>Start time <b>*</b></span><input required name="startTime" type="time"></label><label class="form-field"><span>End time</span><input name="endTime" type="time"></label><label class="form-field"><span>Repeat</span><select name="recurrence"><option value="none">Does not repeat</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select></label><label class="form-field"><span>Reminder</span><select name="reminderMinutes"><option value="">No reminder</option><option value="0">At event time</option><option value="5">5 minutes before</option><option value="15" selected>15 minutes before</option><option value="30">30 minutes before</option><option value="60">1 hour before</option><option value="1440">1 day before</option></select></label></div><p class="form-help">Recurring events repeat on the same weekday or date. Edit or delete the series from any occurrence.</p><div class="dialog-actions"><button type="button" class="button button-ghost" data-action="close-event-dialog">Cancel</button><button type="submit" class="button button-primary">Save schedule</button></div></form></dialog>`;
  }

  function moveCalendar(delta) {
    if (calendarView === "month") {
      const month = Math.min(11, Math.max(0, calendarCursor.getUTCMonth() + delta));
      calendarCursor = new Date(Date.UTC(2027, month, 1));
      const selectedDay = Number(calendarSelectedDate.slice(-2));
      const lastDay = new Date(Date.UTC(2027, month + 1, 0)).getUTCDate();
      calendarSelectedDate = `2027-${String(month + 1).padStart(2, "0")}-${String(Math.min(selectedDay, lastDay)).padStart(2, "0")}`;
    } else {
      const base = new Date(`${calendarSelectedDate}T12:00:00+08:00`);
      const step = calendarView === "week" ? 7 : 1;
      const next = new Date(base.getTime() + delta * step * 86400000);
      const candidate = isoDateUTC(new Date(Date.UTC(next.getUTCFullYear(), next.getUTCMonth(), next.getUTCDate())));
      calendarSelectedDate = candidate < "2027-01-01" ? "2027-01-01" : candidate > "2027-12-31" ? "2027-12-31" : candidate;
      calendarCursor = new Date(`${calendarSelectedDate}T12:00:00+08:00`);
    }
    renderApp();
  }

  function openEventDialog(eventData = null, dateKey = calendarSelectedDate) {
    const dialog = document.getElementById("event-dialog");
    const form = document.getElementById("event-form");
    if (!dialog || !form) return;
    form.reset();
    form.elements.id.value = eventData?.id || "";
    form.elements.title.value = eventData?.title || "";
    form.elements.description.value = eventData?.description || "";
    form.elements.date.value = eventData?.date || (dateKey.startsWith("2027-") ? dateKey : "2027-01-01");
    form.elements.category.value = eventData?.category || "personal";
    form.elements.startTime.value = eventData?.startTime || "09:00";
    form.elements.endTime.value = eventData?.endTime || "";
    form.elements.recurrence.value = eventData?.recurrence || "none";
    form.elements.reminderMinutes.value = eventData?.reminderMinutes === null || eventData?.reminderMinutes === undefined ? "15" : String(eventData.reminderMinutes);
    document.getElementById("event-dialog-title").textContent = eventData ? "Edit schedule" : "Add schedule";
    dialog.showModal();
  }

  function checkReminders() {
    const now = Date.now();
    const today = todayKey();
    if (!today.startsWith("2027-")) return;
    const current = new Date(`${today}T12:00:00+08:00`);
    for (let offset = -1; offset <= 1; offset += 1) {
      const dateKey = isoDateUTC(new Date(current.getTime() + offset * 86400000));
      if (!dateKey.startsWith("2027-")) continue;
      eventsForDate(dateKey).forEach((event) => {
        if (event.reminderMinutes === null || event.reminderMinutes === undefined || !event.startTime) return;
        const occurrence = new Date(`${dateKey}T${event.startTime}:00+08:00`).getTime();
        const reminderAt = occurrence - Number(event.reminderMinutes) * 60000;
        const missed = now > occurrence && now <= occurrence + 10 * 60000;
        if ((!missed && (now < reminderAt || now > occurrence)) || (missed && now < occurrence)) return;
        const key = `${event.id}|${dateKey}|${event.reminderMinutes}`;
        if (state.firedReminders.includes(key)) return;
        state.firedReminders.push(key);
        const entry = { id: key, eventId: event.id, title: event.title, date: dateKey, createdAt: new Date().toISOString(), read: false, missed };
        state.reminderLog.unshift(entry);
        state.reminderLog = state.reminderLog.slice(0, 100);
        showToast(`${missed ? "Missed reminder" : "Upcoming"}: ${event.title}`);
        if (!missed && state.notificationsEnabled && typeof Notification !== "undefined" && Notification.permission === "granted") {
          try { new Notification(event.title, { body: `${eventTime(event)} · Asia/Manila`, tag: key }); } catch (error) { console.warn("Browser notification could not be shown.", error); }
        }
        saveState(false);
      });
    }
  }

  function renderApplications() {
    const c = counts();
    const apps = state.applications;
    const interviews = apps.filter((app) => app.status === "Interview").length;
    const offers = apps.filter((app) => app.status === "Hired").length;
    const followups = apps.filter((app) => app.followUpDate && app.followUpDate <= todayKey() && !["Hired", "Rejected"].includes(app.status)).length;
    const quickLinks = [
      ["OnlineJobs.ph", "https://www.onlinejobs.ph/", "OJ"], ["Upwork", "https://www.upwork.com/", "Up"],
      ["LinkedIn Jobs", "https://www.linkedin.com/jobs/", "in"], ["PeoplePerHour", "https://www.peopleperhour.com/", "P"]
    ];
    const action = `<button class="button button-primary" data-action="add-application">${icon("plus")} Add application</button>`;
    return `${topLevelHeader("YOUR OPPORTUNITY PIPELINE", "Job Applications", "Keep roles, conversations, and follow-ups organized in one place.", action)}
      <section class="metric-grid app-metrics" aria-label="Application summary">
        ${metricCard("briefcase", "Total applications", apps.length, "Roles in your tracker", "blue")}
        ${metricCard("check", "Submitted", c.applicationsSubmitted, "Applications sent", "green")}
        ${metricCard("users", "Interviews", interviews, "Interview-stage roles", "purple")}
        ${metricCard("calendar", "Pending follow-ups", followups, "Due today or earlier", "orange")}
        ${metricCard("sparkles", "Job offers", offers, "Marked as hired", "teal")}
      </section>
      <section class="quick-links-card card"><div><div class="eyebrow">JOB SEARCH SHORTCUTS</div><h2>Explore opportunities</h2></div><div class="job-link-list">${quickLinks.map(([name, url, mark]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="job-platform"><span class="platform-mark">${mark}</span><span>${name}</span>${icon("arrow")}</a>`).join("")}</div></section>
      <section class="applications-panel card"><div class="table-heading"><div><div class="eyebrow">YOUR PIPELINE</div><h2>Applications <span class="subtle-count">${apps.length}</span></h2></div><div class="table-controls"><label class="search-field"><span data-icon="search">${icon("search")}</span><input type="search" id="application-search" placeholder="Search companies or roles" aria-label="Search applications"></label><select id="application-filter" aria-label="Filter applications by status"><option value="">All statuses</option>${APPLICATION_STATUSES.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("")}</select></div></div>
        ${apps.length ? `<div class="table-wrap"><table class="application-table"><thead><tr><th>COMPANY / ROLE</th><th>PLATFORM</th><th>STATUS</th><th>DATE APPLIED</th><th>FOLLOW-UP</th><th>SALARY RANGE</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody id="application-rows">${apps.map(renderApplicationRow).join("")}</tbody></table><div class="empty-filter" id="empty-filter" hidden>No applications match these filters.</div></div>` : `<div class="empty-state"><div class="empty-state-icon">${icon("briefcase")}</div><h3>Your job tracker is ready</h3><p>Add an opportunity to keep its status, follow-up date, and notes together.</p><button class="button button-primary" data-action="add-application">${icon("plus")} Add your first application</button></div>`}
      </section>
      <dialog class="application-dialog" id="application-dialog" aria-labelledby="application-dialog-title"><form id="application-form" method="dialog"><div class="dialog-heading"><div><div class="eyebrow">JOB SEARCH</div><h2 id="application-dialog-title">Add an application</h2></div><button type="button" class="icon-button" data-action="close-dialog" aria-label="Close dialog">${icon("close")}</button></div><input type="hidden" name="id"><div class="form-grid">
        <label class="form-field"><span>Company name <b>*</b></span><input required name="company" maxlength="120" placeholder="Company name"></label>
        <label class="form-field"><span>Job title <b>*</b></span><input required name="title" maxlength="120" placeholder="Customer Support Specialist"></label>
        <label class="form-field form-span-2"><span>Job URL</span><input name="url" type="url" placeholder="https://example.com/jobs/role"></label>
        <label class="form-field"><span>Platform</span><input name="platform" maxlength="80" placeholder="LinkedIn, referral, company site"></label>
        <label class="form-field"><span>Salary range</span><input name="salary" maxlength="80" placeholder="e.g. $45,000–$55,000"></label>
        <label class="form-field"><span>Date applied</span><input name="dateApplied" type="date"></label>
        <label class="form-field"><span>Application status</span><select name="status">${APPLICATION_STATUSES.map((status) => `<option>${escapeHtml(status)}</option>`).join("")}</select></label>
        <label class="form-field"><span>Follow-up date</span><input name="followUpDate" type="date"></label>
        <label class="form-field form-span-2"><span>Notes</span><textarea name="notes" rows="3" maxlength="2000" placeholder="Contact name, next steps, or anything to remember"></textarea></label>
      </div><div class="dialog-actions"><button type="button" class="button button-ghost" data-action="close-dialog">Cancel</button><button type="submit" class="button button-primary">Save application</button></div></form></dialog>`;
  }

  function renderApplicationRow(app) {
    const href = safeHref(app.url || "");
    const date = app.dateApplied ? formatDate(new Date(`${app.dateApplied}T12:00:00`), { month: "short", day: "numeric", year: "numeric" }) : "—";
    const followUp = app.followUpDate ? formatDate(new Date(`${app.followUpDate}T12:00:00`), { month: "short", day: "numeric", year: "numeric" }) : "—";
    const company = escapeHtml(app.company || "Untitled company");
    return `<tr data-application-row data-status="${escapeHtml(app.status)}" data-search="${escapeHtml(`${app.company || ""} ${app.title || ""} ${app.platform || ""}`.toLowerCase())}"><td><div class="company-cell">${href ? `<a class="company-name" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${company} ${icon("arrow")}</a>` : `<strong class="company-name">${company}</strong>`}<span>${escapeHtml(app.title || "—")}</span></div></td><td>${escapeHtml(app.platform || "—")}</td><td><span class="status-badge ${statusClass(app.status)}">${escapeHtml(app.status || "Interested")}</span></td><td>${date}</td><td>${followUp}</td><td>${escapeHtml(app.salary || "—")}</td><td><div class="row-actions"><button class="icon-button small-action" data-action="edit-application" data-id="${escapeHtml(app.id)}" aria-label="Edit ${company}">${icon("pencil")}</button><button class="icon-button small-action danger-action" data-action="delete-application" data-id="${escapeHtml(app.id)}" aria-label="Delete ${company}">${icon("close")}</button></div></td></tr>`;
  }

  function statusClass(status) {
    return String(status || "interested").toLowerCase().replace(/[^a-z]+/g, "-");
  }

  function renderPortfolio() {
    const c = counts();
    return `${topLevelHeader("WORK THAT SHOWS YOUR SKILLS", "My Portfolio", "Turn your practice into clear, shareable examples of what you can do.", `<span class="studied-summary">${icon("check")} <strong data-value="completedProjects">${c.completedProjects}</strong> / 5 complete</span>`)}
      <div class="portfolio-note"><span class="portfolio-note-mark">${icon("layers")}</span><p>Track milestones, add working notes, and attach a screenshot to each project. Project details stay in this browser.</p></div>
      <div class="portfolio-grid">${state.projects.map(renderProjectCard).join("")}</div>`;
  }

  function renderProjectCard(project, index) {
    const done = project.tasks.reduce((sum, _, taskIndex) => sum + (project.checklist[taskIndex] ? 1 : 0), 0);
    const pct = percentage(done, project.tasks.length);
    const attachment = project.evidence?.dataUrl ? `<div class="evidence-preview"><img src="${project.evidence.dataUrl}" alt="Evidence for ${escapeHtml(project.title)}"><div><span>${escapeHtml(project.evidence.name || "Project evidence")}</span><button class="text-button danger-text" data-action="remove-evidence" data-project="${escapeHtml(project.id)}">Remove</button></div></div>` : `<label class="upload-box"><input type="file" data-evidence="${escapeHtml(project.id)}" accept="image/*"><span class="upload-icon">${icon("upload")}</span><span><strong>Add screenshot evidence</strong><small>PNG, JPG, or other image</small></span><span class="button button-ghost upload-button">Choose image</span></label>`;
    return `<article class="project-card card" data-project-card="${escapeHtml(project.id)}"><div class="project-card-top"><div class="project-index">${String(index + 1).padStart(2, "0")}</div><label class="project-status-label"><span class="sr-only">${escapeHtml(project.title)} status</span><select data-project-id="${escapeHtml(project.id)}" data-project-field="status" aria-label="${escapeHtml(project.title)} status">${PROJECT_STATUSES.map((status) => `<option ${project.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label></div>
      <h2>${escapeHtml(project.title)}</h2><p class="project-description">${escapeHtml(project.description)}</p><div class="skill-tags">${project.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div>
      <div class="project-dates"><label><span>START DATE</span><input type="date" value="${escapeHtml(project.startDate || "")}" data-project-id="${escapeHtml(project.id)}" data-project-field="startDate" aria-label="${escapeHtml(project.title)} start date"></label><label><span>TARGET DATE</span><input type="date" value="${escapeHtml(project.targetDate || "")}" data-project-id="${escapeHtml(project.id)}" data-project-field="targetDate" aria-label="${escapeHtml(project.title)} target completion date"></label></div>
      <div class="project-progress-line"><span>Project checklist</span><strong><span data-project-done="${escapeHtml(project.id)}">${done}</span> / ${project.tasks.length}</strong></div>${progressBar(pct, "purple", `${project.title} checklist progress`)}
      <div class="project-checklist">${project.tasks.map((task, taskIndex) => `<label class="project-task ${project.checklist[taskIndex] ? "is-checked" : ""}"><input type="checkbox" data-project-task="${taskIndex}" data-project-id="${escapeHtml(project.id)}" ${project.checklist[taskIndex] ? "checked" : ""}><span class="custom-check" aria-hidden="true">${icon("check")}</span><span>${escapeHtml(task)}</span></label>`).join("")}</div>
      <label class="form-field project-notes"><span>PROJECT NOTES</span><textarea rows="3" maxlength="1800" placeholder="Capture what you built or learned…" data-project-id="${escapeHtml(project.id)}" data-project-field="notes">${escapeHtml(project.notes || "")}</textarea></label>
      <div class="project-evidence" data-evidence-preview="${escapeHtml(project.id)}">${attachment}</div>
      <div class="project-completion"><span class="completion-indicator ${project.status === "Completed" ? "complete" : ""}" data-project-indicator="${escapeHtml(project.id)}">${icon(project.status === "Completed" ? "check" : "layers")}</span><span data-project-status-label="${escapeHtml(project.id)}">${escapeHtml(project.status)}</span><span class="completion-spacer"></span>${project.status === "Completed" ? `<button class="text-button" data-action="reopen-project" data-project="${escapeHtml(project.id)}">Reopen</button>` : `<button class="text-button" data-action="complete-project" data-project="${escapeHtml(project.id)}">Mark complete</button>`}</div>
      </article>`;
  }

  function renderProgress() {
    const c = counts();
    const overall = percentage(c.completedLessons, c.totalLessons);
    return `${topLevelHeader("YOUR LEARNING AT A GLANCE", "Progress Report", "A live view of your self-paced roadmap, skill paths, reminders, and portfolio milestones.", `<button class="button button-outline" data-action="download-backup">${icon("download")} Download backup</button>`)}
      <section class="report-hero card"><div><div class="eyebrow">SELF-PACED LEARNING</div><h2>Progress that adds up.</h2><p>Track the 30-session roadmap and your six academy paths at your own pace.</p><div class="report-hero-numbers"><div><strong data-value="completedLessons">${c.completedLessons}</strong><span>roadmap tasks completed</span></div><div><strong data-value="completedDays">${c.completedDays}<small> / 30</small></strong><span>sessions complete</span></div><div><strong data-value="overallPercent">${overall}%</strong><span>roadmap progress</span></div></div></div><div class="report-ring" style="--progress:${overall}%"><div><strong data-value="overallPercent">${overall}%</strong><span>COMPLETE</span></div></div></section>
      <section class="section-block report-tracks"><div class="section-heading"><div><div class="eyebrow">SKILLS BY TRACK</div><h2>Learning path progress</h2></div><span class="resource-count">${c.totalLessons} lessons total</span></div><div class="report-track-list">${TRACKS.map((track) => renderTrackReport(track, c.trackCounts[track.id])).join("")}</div></section>
      <section class="section-block"><div class="section-heading"><div><div class="eyebrow">SESSION BY SESSION</div><h2>Thirty-session completion</h2></div><span class="subtle-count"><strong data-value="completedDays">${c.completedDays}</strong> / 30 sessions</span></div><div class="report-days card">${LESSONS.map((day) => {
        const done = day.tasks.reduce((sum, _, index) => sum + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0);
        return `<div class="report-day-row"><span class="report-day-number">${String(day.day).padStart(2, "0")}</span><span class="report-day-title"><strong>${escapeHtml(day.title)}</strong><small>Session ${day.day} · ${escapeHtml(day.track)}</small></span><span class="report-day-count"><strong data-day-done="${day.day}">${done}</strong> / ${day.tasks.length}</span><div class="report-day-progress">${progressBar(percentage(done, day.tasks.length), done === day.tasks.length ? "emerald" : "blue", `Session ${day.day} completion`)}</div><span class="report-day-pct" data-day-pct="${day.day}">${percentage(done, day.tasks.length)}%</span></div>`;
      }).join("")}</div></section>
      <section class="report-lower-grid"><article class="report-stat-card card"><div class="metric-icon green">${icon("compass")}</div><span class="metric-label">Academy lessons complete</span><strong><span data-value="studiedResources">${c.studiedResources}</span> <small>/ ${ACADEMIES.length}</small></strong><button class="text-button" data-route="academy">View learning academy →</button></article><article class="report-stat-card card"><div class="metric-icon purple">${icon("layers")}</div><span class="metric-label">Portfolio projects completed</span><strong><span data-value="completedProjects">${c.completedProjects}</span> <small>/ 5</small></strong><button class="text-button" data-route="portfolio">View your portfolio →</button></article><article class="report-stat-card card"><div class="metric-icon blue">${icon("briefcase")}</div><span class="metric-label">Applications submitted</span><strong><span data-value="applicationsSubmitted">${c.applicationsSubmitted}</span></strong><button class="text-button" data-route="applications">Open job tracker →</button></article></section>`;
  }

  function renderTrackReport(track, data) {
    const pct = percentage(data.completed, data.total);
    return `<div class="report-track-row"><div class="report-track-icon ${track.tone}">${icon(track.icon)}</div><div class="report-track-main"><div class="report-track-title"><strong>${track.title}</strong><span><b data-track-done="${escapeHtml(track.id)}">${data.completed}</b> / <span data-track-total="${escapeHtml(track.id)}">${data.total}</span> lessons</span></div>${progressBar(pct, track.tone, `${track.title} progress`)}</div><strong class="report-track-pct" data-track-percent="${escapeHtml(track.id)}">${pct}%</strong></div>`;
  }

  function renderSettings() {
    const c = counts();
    return `${topLevelHeader("PERSONALIZE YOUR SPACE", "Settings", "Manage your saved learning data and understand where it lives.")}
      <div class="settings-grid"><section class="settings-card card"><div class="settings-card-icon">${icon("database")}</div><div class="eyebrow">SAVED ON THIS DEVICE</div><h2>Your progress stays in this browser</h2><p>Check-offs, application details, project notes, and screenshots are saved in this browser's local storage. They are not automatically synchronized between devices. Download a backup from the Progress Report before switching devices.</p><div class="settings-stats"><div><strong>${c.completedLessons}</strong><span>lessons checked off</span></div><div><strong>${state.applications.length}</strong><span>applications tracked</span></div><div><strong>${c.studiedResources}</strong><span>resources studied</span></div></div><button class="button button-outline" data-action="download-backup">${icon("download")} Download a data backup</button></section>
      <section class="settings-card settings-reset card"><div class="settings-card-icon danger">${icon("close")}</div><div class="eyebrow">START FRESH</div><h2>Reset saved data</h2><p>Clear all lesson check-offs, schedule activity, academy study marks, applications, project checklists, notes, and uploaded screenshots from this browser.</p><div class="settings-reset-note">This action cannot be undone. Download a backup first if you want to keep a copy.</div><button class="button button-danger" data-action="reset-data">Reset all saved data</button></section>
      <section class="settings-card card settings-about"><div class="settings-card-icon">${icon("calendarDays")}</div><div class="eyebrow">HUB DETAILS</div><h2>Permanent learning and schedule hub</h2><p>The 30-session roadmap is self-paced. The weekly routine repeats on selected days, and calendar events cover January through December 2027. Reminder times use Asia/Manila.</p><div class="settings-program-row"><span>Roadmap tasks</span><strong>${c.totalLessons} across 30 sessions</strong></div><div class="settings-program-row"><span>Academy lessons</span><strong>${ACADEMIES.length} across six paths</strong></div><div class="settings-program-row"><span>Routine blocks</span><strong>${state.routineBlocks.length} editable blocks</strong></div><div class="settings-program-row"><span>Calendar events</span><strong>${state.calendarEvents.length}</strong></div></section></div>`;
  }

  const PAGE_RENDERERS = {
    dashboard: renderDashboard, learning: renderLearning, academy: renderAcademy, calendar: renderCalendar,
    routine: renderRoutine, applications: renderApplications, portfolio: renderPortfolio,
    progress: renderProgress, settings: renderSettings
  };

  function renderApp() {
    document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
    document.querySelectorAll(".nav-link[data-route]").forEach((button) => {
      const selected = button.dataset.route === currentRoute;
      button.classList.toggle("active", selected);
      if (selected) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    });
    const title = NAV_ITEMS.find(([route]) => route === currentRoute)?.[1] || "Dashboard";
    document.getElementById("page-title").textContent = title;
    document.getElementById("topbar-date").textContent = formatDate(new Date(), { weekday: "short", month: "short", day: "numeric", year: "numeric" });
    document.getElementById("main-content").innerHTML = (PAGE_RENDERERS[currentRoute] || renderDashboard)();
    document.title = `${title} · Gabriel Valdez's Learning Hub`;
    closeMobileSidebar();
  }

  function navigate(route, track = "") {
    if (!PAGE_RENDERERS[route]) return;
    currentRoute = route;
    renderApp();
    if (route === "academy" && track) {
      requestAnimationFrame(() => {
        const section = document.querySelector(`[data-academy-path="${CSS.escape(track)}"]`);
        const details = section?.querySelector("details");
        if (details) details.open = true;
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else if (route === "learning" && track) {
      requestAnimationFrame(() => {
        const day = LESSONS.find((item) => item.track === track);
        const el = day ? document.querySelector(`[data-day="${day.day}"]`) : null;
        if (el) {
          el.open = true;
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  function updateProgressWidgets() {
    const c = counts();
    const values = {
      completedDays: c.completedDays,
      completedLessons: c.completedLessons,
      totalLessons: c.totalLessons,
      overallPercent: `${percentage(c.completedLessons, c.totalLessons)}%`,
      applicationsSubmitted: c.applicationsSubmitted,
      completedProjects: c.completedProjects,
      studiedResources: c.studiedResources,
      completedRoutine: c.completedRoutine,
      totalRoutine: c.totalRoutine,
      academyPercent: `${percentage(c.studiedResources, c.totalAcademyLessons)}%`
    };
    Object.entries(values).forEach(([key, value]) => document.querySelectorAll(`[data-value="${key}"]`).forEach((node) => { node.textContent = value; }));
    const overall = percentage(c.completedLessons, c.totalLessons);
    document.querySelectorAll('[aria-label="Learning plan progress"]').forEach((bar) => setProgress(bar, overall));
    document.querySelectorAll('[aria-label="Academy learning progress"]').forEach((bar) => setProgress(bar, percentage(c.studiedResources, c.totalAcademyLessons)));
    document.querySelectorAll(".report-ring").forEach((ring) => ring.style.setProperty("--progress", `${overall}%`));
    TRACKS.forEach((track) => {
      const item = c.trackCounts[track.id];
      document.querySelectorAll(`[aria-label="${CSS.escape(track.title)} progress"]`).forEach((bar) => setProgress(bar, percentage(item.completed, item.total)));
    });
    document.querySelectorAll("[data-track-percent]").forEach((node) => {
      const item = c.trackCounts[node.dataset.trackPercent];
      if (item) node.textContent = `${percentage(item.completed, item.total)}%`;
    });
    document.querySelectorAll("[data-track-pct-copy]").forEach((node) => {
      const item = c.trackCounts[node.dataset.trackPctCopy];
      if (item) node.textContent = `${percentage(item.completed, item.total)}%`;
    });
    document.querySelectorAll("[data-track-done]").forEach((node) => {
      const item = c.trackCounts[node.dataset.trackDone];
      if (item) node.textContent = item.completed;
    });
    Object.entries(c.trackCounts).forEach(([track, item]) => {
      document.querySelectorAll(`[data-track-total="${CSS.escape(track)}"]`).forEach((node) => { node.textContent = item.total; });
    });
    LESSONS.forEach((day) => {
      const done = day.tasks.reduce((sum, _, index) => sum + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0);
      document.querySelectorAll(`[data-day-done="${day.day}"]`).forEach((node) => { node.textContent = done; });
      document.querySelectorAll(`[data-day-status="${day.day}"]`).forEach((node) => {
        const complete = done === day.tasks.length;
        node.textContent = complete ? "Complete" : `${day.tasks.length - done} to go`;
        node.classList.toggle("is-complete", complete);
      });
      document.querySelectorAll(`[data-day-pct="${day.day}"]`).forEach((node) => { node.textContent = `${percentage(done, day.tasks.length)}%`; });
      document.querySelectorAll(`[aria-label="Day ${day.day} completion"]`).forEach((bar) => setProgress(bar, percentage(done, day.tasks.length)));
      const details = document.querySelector(`[data-day="${day.day}"]`);
      const summaryNumber = details?.querySelector(".day-number");
      if (summaryNumber) {
        const isComplete = done === day.tasks.length;
        summaryNumber.classList.toggle("is-complete", isComplete);
        summaryNumber.innerHTML = isComplete ? icon("check") : String(day.day).padStart(2, "0");
      }
    });
    document.querySelectorAll("[data-routine-done]").forEach((node) => { node.textContent = c.completedRoutine; });
    document.querySelectorAll('[aria-label="Today\'s routine progress"]').forEach((bar) => setProgress(bar, percentage(c.completedRoutine, c.totalRoutine)));
    document.querySelectorAll("[aria-label^='Project checklist progress']").forEach((bar) => {
      const id = bar.getAttribute("aria-label").replace(" checklist progress", "");
      const project = state.projects.find((item) => item.title === id);
      if (project) setProgress(bar, percentage(project.tasks.reduce((sum, _, index) => sum + (project.checklist[index] ? 1 : 0), 0), project.tasks.length));
    });
  }

  function setProgress(element, value) {
    element.setAttribute("aria-valuenow", String(value));
    const fill = element.querySelector(".progress-fill");
    if (fill) fill.style.width = `${value}%`;
  }

  function updateProjectCard(id) {
    const project = state.projects.find((item) => item.id === id);
    const card = document.querySelector(`[data-project-card="${CSS.escape(id)}"]`);
    if (!project || !card) return;
    const done = project.tasks.reduce((sum, _, index) => sum + (project.checklist[index] ? 1 : 0), 0);
    const doneCounter = card.querySelector(`[data-project-done="${CSS.escape(id)}"]`);
    if (doneCounter) doneCounter.textContent = done;
    const bar = card.querySelector('[role="progressbar"]');
    if (bar) setProgress(bar, percentage(done, project.tasks.length));
    const label = card.querySelector(`[data-project-status-label="${CSS.escape(id)}"]`);
    if (label) label.textContent = project.status;
    const indicator = card.querySelector(`[data-project-indicator="${CSS.escape(id)}"]`);
    if (indicator) {
      indicator.classList.toggle("complete", project.status === "Completed");
      indicator.innerHTML = icon(project.status === "Completed" ? "check" : "layers");
    }
    card.querySelectorAll("[data-action='complete-project'], [data-action='reopen-project']").forEach((button) => button.remove());
    const footer = card.querySelector(".project-completion");
    if (footer) footer.insertAdjacentHTML("beforeend", project.status === "Completed" ? `<button class="text-button" data-action="reopen-project" data-project="${escapeHtml(id)}">Reopen</button>` : `<button class="text-button" data-action="complete-project" data-project="${escapeHtml(id)}">Mark complete</button>`);
    updateProgressWidgets();
  }

  function applyApplicationFilters() {
    const search = document.getElementById("application-search");
    const filter = document.getElementById("application-filter");
    const rows = [...document.querySelectorAll("[data-application-row]")];
    if (!rows.length) return;
    const query = (search?.value || "").trim().toLowerCase();
    const status = filter?.value || "";
    let visible = 0;
    rows.forEach((row) => {
      const matches = (!query || row.dataset.search.includes(query)) && (!status || row.dataset.status === status);
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    const empty = document.getElementById("empty-filter");
    if (empty) empty.hidden = visible !== 0;
  }

  function openApplicationDialog(application = null) {
    const dialog = document.getElementById("application-dialog");
    const form = document.getElementById("application-form");
    if (!dialog || !form) return;
    form.reset();
    form.elements.id.value = application?.id || "";
    form.elements.company.value = application?.company || "";
    form.elements.title.value = application?.title || "";
    form.elements.url.value = application?.url || "";
    form.elements.platform.value = application?.platform || "";
    form.elements.salary.value = application?.salary || "";
    form.elements.dateApplied.value = application?.dateApplied || todayKey();
    form.elements.status.value = application?.status || "Interested";
    form.elements.followUpDate.value = application?.followUpDate || "";
    form.elements.notes.value = application?.notes || "";
    document.getElementById("application-dialog-title").textContent = application ? "Edit application" : "Add an application";
    form.querySelector("button[type='submit']").textContent = application ? "Save changes" : "Save application";
    dialog.showModal();
  }

  function compressImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Could not read that image."));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("That image could not be opened."));
        image.onload = () => {
          const scale = Math.min(1, 1400 / Math.max(image.width, image.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          const context = canvas.getContext("2d");
          if (!context) return reject(new Error("Image compression is unavailable."));
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.78));
        };
        image.src = String(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  function updateEvidencePreview(projectId) {
    const project = state.projects.find((item) => item.id === projectId);
    const container = document.querySelector(`[data-evidence-preview="${CSS.escape(projectId)}"]`);
    if (!project || !container) return;
    if (!project.evidence?.dataUrl) {
      container.innerHTML = `<label class="upload-box"><input type="file" data-evidence="${escapeHtml(project.id)}" accept="image/*"><span class="upload-icon">${icon("upload")}</span><span><strong>Add screenshot evidence</strong><small>PNG, JPG, or other image</small></span><span class="button button-ghost upload-button">Choose image</span></label>`;
      return;
    }
    container.innerHTML = `<div class="evidence-preview"><img src="${project.evidence.dataUrl}" alt="Evidence for ${escapeHtml(project.title)}"><div><span>${escapeHtml(project.evidence.name || "Project evidence")}</span><button class="text-button danger-text" data-action="remove-evidence" data-project="${escapeHtml(project.id)}">Remove</button></div></div>`;
  }

  function downloadBackup() {
    const backup = { product: "Gabriel Valdez's Learning Hub", version: 2, exportedAt: new Date().toISOString(), data: state };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `gabriel-valdez-learning-hub-backup-${todayKey()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast("Your data backup was downloaded.");
  }

  function closeMobileSidebar() {
    document.body.classList.remove("sidebar-open");
    const menu = document.getElementById("mobile-menu-button");
    if (menu) menu.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", async (event) => {
    const calendarDateButton = event.target.closest("[data-calendar-date]");
    if (calendarDateButton) {
      calendarSelectedDate = calendarDateButton.dataset.calendarDate;
      calendarCursor = new Date(`${calendarSelectedDate}T12:00:00+08:00`);
      renderApp();
      return;
    }
    const calendarViewButton = event.target.closest("[data-calendar-view]");
    if (calendarViewButton) {
      calendarView = calendarViewButton.dataset.calendarView;
      renderApp();
      return;
    }
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      navigate(routeButton.dataset.route, routeButton.dataset.track || "");
      return;
    }
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.action;
    if (action === "calendar-prev") moveCalendar(-1);
    if (action === "calendar-next") moveCalendar(1);
    if (action === "calendar-today") {
      const today = todayKey();
      calendarSelectedDate = today.startsWith("2027-") ? today : "2027-01-01";
      calendarCursor = new Date(`${calendarSelectedDate}T12:00:00+08:00`);
      renderApp();
    }
    if (action === "add-event") openEventDialog(null, actionButton.dataset.date || calendarSelectedDate);
    if (action === "edit-event") {
      const eventData = state.calendarEvents.find((item) => item.id === actionButton.dataset.id);
      if (eventData) openEventDialog(eventData, eventData.date);
    }
    if (action === "delete-event") {
      const scheduled = state.calendarEvents.find((item) => item.id === actionButton.dataset.id);
      if (scheduled && window.confirm(`Delete “${scheduled.title}”${scheduled.recurrence !== "none" ? " and its repeating schedule" : ""}?`)) {
        state.calendarEvents = state.calendarEvents.filter((item) => item.id !== scheduled.id);
        saveState(); renderApp(); showToast("Schedule deleted.");
      }
    }
    if (action === "close-event-dialog") document.getElementById("event-dialog")?.close();
    if (action === "scroll-reminders") document.getElementById("reminder-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (action === "add-routine") openRoutineDialog();
    if (action === "edit-routine") {
      const block = state.routineBlocks.find((item) => item.id === actionButton.dataset.id);
      if (block) openRoutineDialog(block);
    }
    if (action === "delete-routine") {
      const block = state.routineBlocks.find((item) => item.id === actionButton.dataset.id);
      if (block && window.confirm(`Delete “${block.activity}” from your repeating routine?`)) {
        state.routineBlocks = state.routineBlocks.filter((item) => item.id !== block.id);
        saveState(); renderApp(); showToast("Routine block deleted.");
      }
    }
    if (action === "close-routine-dialog") document.getElementById("routine-dialog")?.close();
    if (action === "continue-academy") {
      const nextLesson = ACADEMIES.find((lesson) => !state.academyProgress[lesson.id]);
      if (!nextLesson) { showToast("You completed all academy lessons."); return; }
      const path = ACADEMY_PATHS.find((item) => item.id === nextLesson.category);
      navigate("academy");
      requestAnimationFrame(() => {
        const details = document.querySelector(`[data-academy-path="${path.id}"] details`);
        if (details) details.open = true;
        document.getElementById(`academy-lesson-${nextLesson.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (action === "mark-reminder-read" || action === "mark-reminders-read") {
      if (actionButton.dataset.id) {
        const reminder = state.reminderLog.find((item) => item.id === actionButton.dataset.id);
        if (reminder) reminder.read = true;
      } else state.reminderLog.forEach((item) => { item.read = true; });
      saveState(); renderApp();
    }
    if (action === "enable-notifications") {
      if (state.notificationsEnabled) {
        state.notificationsEnabled = false; saveState(); renderApp(); showToast("Browser notifications disabled.");
      } else if (typeof Notification === "undefined") showToast("This browser does not support notifications.", "error");
      else if (Notification.permission === "denied") showToast("Notifications are blocked. Allow them in your browser’s site settings, then try again.", "error");
      else {
        const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
        if (permission === "granted") { state.notificationsEnabled = true; saveState(); renderApp(); showToast("Browser reminders enabled while this site is open."); checkReminders(); }
        else showToast("Notification permission was not granted. You can enable it in browser site settings.", "error");
      }
    }
    if (action === "add-application") openApplicationDialog();
    if (action === "edit-application") {
      const application = state.applications.find((item) => item.id === actionButton.dataset.id);
      if (application) openApplicationDialog(application);
    }
    if (action === "delete-application") {
      const application = state.applications.find((item) => item.id === actionButton.dataset.id);
      if (application && window.confirm(`Delete the ${application.company} application?`)) {
        state.applications = state.applications.filter((item) => item.id !== application.id);
        saveState(); renderApp(); showToast("Application deleted.");
      }
    }
    if (action === "close-dialog") document.getElementById("application-dialog")?.close();
    if (action === "reset-data" && window.confirm("Clear all learning progress, routine blocks, calendar events, reminders, applications, project checklists, notes, and screenshots saved in this browser? This cannot be undone.")) {
      state = initialState(); saveState(); renderApp(); showToast("Saved data was reset.");
    }
    if (action === "download-backup") downloadBackup();
    if (action === "complete-project" || action === "reopen-project") {
      const project = state.projects.find((item) => item.id === actionButton.dataset.project);
      if (project) { project.status = action === "complete-project" ? "Completed" : "In progress"; saveState(); updateProjectCard(project.id); }
    }
    if (action === "remove-evidence") {
      const project = state.projects.find((item) => item.id === actionButton.dataset.project);
      if (project) { project.evidence = null; saveState(); updateEvidencePreview(project.id); }
    }
  });

  document.getElementById("mobile-menu-button").addEventListener("click", () => {
    const open = !document.body.classList.contains("sidebar-open");
    document.body.classList.toggle("sidebar-open", open);
    document.getElementById("mobile-menu-button").setAttribute("aria-expanded", String(open));
  });
  document.getElementById("sidebar-scrim").addEventListener("click", closeMobileSidebar);

  document.addEventListener("change", async (event) => {
    const element = event.target;
    if (element.matches("[data-lesson]")) {
      state.lessonStatus[element.dataset.lesson] = element.checked;
      element.closest(".lesson-row")?.classList.toggle("is-checked", element.checked);
      saveState(); updateProgressWidgets();
    }
    if (element.matches("[data-academy-progress]")) {
      const id = element.dataset.academyProgress;
      const pathId = element.dataset.academyPathId;
      state.academyProgress[id] = element.checked;
      document.querySelectorAll(`[data-academy-progress="${CSS.escape(id)}"]`).forEach((input) => { input.checked = element.checked; });
      document.querySelector(`[data-academy-lesson="${CSS.escape(id)}"]`)?.classList.toggle("academy-lesson-done", element.checked);
      saveState(); updateProgressWidgets();
      const path = ACADEMY_PATHS.find((item) => item.id === pathId);
      if (path) {
        const done = path.lessons.filter((lesson) => state.academyProgress[lesson.id]).length;
        document.querySelectorAll(`[data-path-done="${pathId}"]`).forEach((node) => { node.textContent = done; });
        document.querySelectorAll(`[data-path-percent="${pathId}"]`).forEach((node) => { node.textContent = `${percentage(done, path.lessons.length)}%`; });
        document.querySelectorAll(`[aria-label="${CSS.escape(path.title)} progress"]`).forEach((bar) => setProgress(bar, percentage(done, path.lessons.length)));
      }
    }
    if (element.matches("[data-routine]")) {
      state.routine[todayKey()] ||= {};
      state.routine[todayKey()][element.dataset.routine] = element.checked;
      element.closest(".routine-item")?.classList.toggle("routine-done", element.checked);
      saveState(); updateProgressWidgets();
    }
    if (element.matches("[data-project-task]")) {
      const project = state.projects.find((item) => item.id === element.dataset.projectId);
      if (project) {
        project.checklist[element.dataset.projectTask] = element.checked;
        element.closest(".project-task")?.classList.toggle("is-checked", element.checked);
        saveState(); updateProjectCard(project.id);
      }
    }
    if (element.matches("[data-project-id][data-project-field]")) {
      const project = state.projects.find((item) => item.id === element.dataset.projectId);
      if (project) { project[element.dataset.projectField] = element.value; saveState(); if (element.dataset.projectField === "status") updateProjectCard(project.id); }
    }
    if (element.matches("[data-evidence]")) {
      const file = element.files?.[0];
      const project = state.projects.find((item) => item.id === element.dataset.evidence);
      if (file && project) {
        try {
          project.evidence = { name: file.name, dataUrl: await compressImage(file) };
          if (saveState()) { updateEvidencePreview(project.id); showToast("Screenshot added to your project."); }
        } catch (error) { showToast(error.message || "Could not add that image.", "error"); }
      }
    }
    if (element.matches("#application-filter")) applyApplicationFilters();
  });

  document.addEventListener("input", (event) => {
    const element = event.target;
    if (element.matches("#application-search")) applyApplicationFilters();
    if (element.matches("[data-project-id][data-project-field='notes']")) {
      const project = state.projects.find((item) => item.id === element.dataset.projectId);
      if (project) { project.notes = element.value; saveState(false); }
    }
    if (element.matches("[data-academy-note]")) {
      state.academyNotes[element.dataset.academyNote] = element.value;
      saveState(false);
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "routine-form") {
      event.preventDefault();
      const form = event.target;
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const id = String(fields.get("id") || (crypto.randomUUID ? crypto.randomUUID() : `routine-${Date.now()}`));
      const startTime = String(fields.get("startTime") || "");
      const endTime = String(fields.get("endTime") || "");
      if (startTime && endTime && endTime <= startTime) { showToast("The end time must be later than the start time.", "error"); return; }
      const block = { id, activity: String(fields.get("activity") || "").trim(), startTime, endTime, category: String(fields.get("category") || "Learning"), days: fields.getAll("days").map(Number) };
      const index = state.routineBlocks.findIndex((item) => item.id === id);
      if (index >= 0) state.routineBlocks[index] = block; else state.routineBlocks.push(block);
      saveState(); document.getElementById("routine-dialog").close(); renderApp(); showToast(index >= 0 ? "Routine block updated." : "Routine block added."); return;
    }
    if (event.target.id === "event-form") {
      event.preventDefault();
      const form = event.target;
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const startTime = String(fields.get("startTime") || "");
      const endTime = String(fields.get("endTime") || "");
      if (endTime && endTime <= startTime) { showToast("The end time must be later than the start time.", "error"); return; }
      const id = String(fields.get("id") || (crypto.randomUUID ? crypto.randomUUID() : `event-${Date.now()}`));
      const scheduled = {
        id, title: String(fields.get("title") || "").trim(), description: String(fields.get("description") || "").trim(),
        date: String(fields.get("date") || ""), startTime, endTime, category: String(fields.get("category") || "other"),
        recurrence: String(fields.get("recurrence") || "none"), reminderMinutes: fields.get("reminderMinutes") === "" ? null : Number(fields.get("reminderMinutes"))
      };
      const index = state.calendarEvents.findIndex((item) => item.id === id);
      if (index >= 0) state.calendarEvents[index] = scheduled; else state.calendarEvents.push(scheduled);
      state.firedReminders = state.firedReminders.filter((key) => !key.startsWith(`${id}|`));
      saveState(); document.getElementById("event-dialog").close();
      calendarSelectedDate = scheduled.date; calendarCursor = new Date(`${scheduled.date}T12:00:00+08:00`); renderApp(); showToast(index >= 0 ? "Schedule updated." : "Schedule added."); checkReminders(); return;
    }
    if (event.target.id !== "application-form") return;
    event.preventDefault();
    const form = event.target;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const id = fields.get("id") || (crypto.randomUUID ? crypto.randomUUID() : `app-${Date.now()}`);
    const application = {
      id,
      company: String(fields.get("company") || "").trim(),
      title: String(fields.get("title") || "").trim(),
      url: String(fields.get("url") || "").trim(),
      platform: String(fields.get("platform") || "").trim(),
      salary: String(fields.get("salary") || "").trim(),
      dateApplied: String(fields.get("dateApplied") || ""),
      status: String(fields.get("status") || "Interested"),
      followUpDate: String(fields.get("followUpDate") || ""),
      notes: String(fields.get("notes") || "").trim()
    };
    const existingIndex = state.applications.findIndex((item) => item.id === id);
    if (existingIndex >= 0) state.applications[existingIndex] = application; else state.applications.unshift(application);
    saveState();
    document.getElementById("application-dialog").close();
    renderApp();
    showToast(existingIndex >= 0 ? "Application updated." : "Application added.");
  });

  renderApp();
  checkReminders();
  window.setInterval(checkReminders, 20000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) checkReminders(); });
})();

