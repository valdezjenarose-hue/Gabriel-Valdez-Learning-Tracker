(() => {
  "use strict";

  const STORAGE_KEY = "jena-learning-hub-v1";
  const PROGRAM_YEAR = 2026;
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
    { id: "SEO", title: "SEO Specialist", short: "SEO", description: "Search visibility, keyword research, and technical foundations.", icon: "search", tone: "blue" },
    { id: "GoHighLevel", title: "GoHighLevel Specialist", short: "GoHighLevel", description: "CRM setup, funnels, pipelines, and automation.", icon: "workflow", tone: "green" },
    { id: "HubSpot", title: "HubSpot Specialist", short: "HubSpot", description: "Sales and service hubs, contacts, and deal management.", icon: "hub", tone: "orange" },
    { id: "CRM", title: "CRM Specialist", short: "CRM", description: "Customer lifecycle, operations, reporting, and data hygiene.", icon: "users", tone: "purple" },
    { id: "AI Support", title: "AI Support Specialist", short: "AI Support", description: "Practical AI, prompt writing, and customer support workflows.", icon: "sparkles", tone: "teal" },
    { id: "Career", title: "Portfolio & Career", short: "Career", description: "Portfolio projects and the final career readiness review.", icon: "briefcase", tone: "navy" }
  ];

  const PHASES = [
    { title: "SEO Specialist", range: "December 1–7", start: 1, end: 7, tone: "blue" },
    { title: "GoHighLevel Specialist", range: "December 8–14", start: 8, end: 14, tone: "green" },
    { title: "HubSpot and CRM Specialist", range: "December 15–21", start: 15, end: 21, tone: "orange" },
    { title: "AI Support and Portfolio Development", range: "December 22–30", start: 22, end: 30, tone: "purple" }
  ];

  const ACADEMIES = [
    { name: "Google Search Central", category: "SEO", icon: "search", description: "Official documentation and guidance for improving a site's presence in Google Search.", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { name: "Google Search Console", category: "SEO", icon: "chart", description: "Explore search performance, indexing reports, and site health tools.", url: "https://search.google.com/search-console/about" },
    { name: "Google Skillshop", category: "SEO", icon: "graduation", description: "Google's online training hub for its professional tools and platforms.", url: "https://skillshop.withgoogle.com/" },
    { name: "Semrush Academy", category: "SEO", icon: "book", description: "Courses and lessons covering SEO, content, and digital marketing.", url: "https://www.semrush.com/academy/" },
    { name: "Ahrefs Academy", category: "SEO", icon: "compass", description: "Practical SEO learning resources from the Ahrefs team.", url: "https://ahrefs.com/academy" },
    { name: "HighLevel Official Website", category: "GoHighLevel", icon: "workflow", description: "Product information and platform resources for HighLevel users.", url: "https://www.gohighlevel.com/" },
    { name: "HighLevel Help Center", category: "GoHighLevel", icon: "lifeBuoy", description: "Search setup instructions and product support documentation.", url: "https://help.gohighlevel.com/" },
    { name: "HighLevel Certified Admin", category: "GoHighLevel", icon: "badge", description: "Information about HighLevel's Certified Admin learning path.", url: "https://certified.gohighlevel.com/" },
    { name: "HubSpot Academy", category: "HubSpot", icon: "graduation", description: "Training resources for marketing, sales, service, and CRM tools.", url: "https://academy.hubspot.com/" },
    { name: "HubSpot Certifications", category: "HubSpot", icon: "badge", description: "Browse HubSpot's certification catalog and course requirements.", url: "https://academy.hubspot.com/certification-overview" },
    { name: "HubSpot CRM", category: "HubSpot", icon: "hub", description: "Explore HubSpot's CRM platform and its product overview.", url: "https://www.hubspot.com/products/crm" },
    { name: "Salesforce Trailhead", category: "CRM", icon: "mountain", description: "Guided modules and hands-on learning for Salesforce products and CRM concepts.", url: "https://trailhead.salesforce.com/" },
    { name: "Zendesk Training", category: "CRM", icon: "lifeBuoy", description: "Training resources for customer service and support workflows.", url: "https://training.zendesk.com/" },
    { name: "OpenAI Academy", category: "AI", icon: "sparkles", description: "Learning resources to build practical AI skills and understand AI tools.", url: "https://academy.openai.com/" },
    { name: "Microsoft Learn", category: "AI", icon: "book", description: "Training paths and documentation across Microsoft's technology topics.", url: "https://learn.microsoft.com/training/" },
    { name: "Google Cloud Skills Boost", category: "AI", icon: "cloud", description: "Hands-on labs and learning paths for Google Cloud technologies.", url: "https://www.cloudskillsboost.google/" }
  ];

  const ROUTINE = [
    { time: "5:00 AM – 12:30 PM", activity: "Sleep", category: "sleep", icon: "moon" },
    { time: "12:30 PM – 1:30 PM", activity: "Wake up, meal, preparation", category: "personal", icon: "sun" },
    { time: "1:30 PM – 2:00 PM", activity: "Exercise and personal time", category: "personal", icon: "activity" },
    { time: "2:00 PM – 3:30 PM", activity: "Main learning session", category: "learning", icon: "book" },
    { time: "3:30 PM – 3:45 PM", activity: "Break", category: "personal", icon: "coffee" },
    { time: "3:45 PM – 5:15 PM", activity: "Practical exercises", category: "learning", icon: "pencil" },
    { time: "5:15 PM – 6:00 PM", activity: "Dinner and rest", category: "personal", icon: "coffee" },
    { time: "6:00 PM – 7:00 PM", activity: "Job hunting", category: "job", icon: "search" },
    { time: "7:00 PM – 8:00 PM", activity: "Job applications", category: "job", icon: "briefcase" },
    { time: "8:00 PM – 9:00 PM", activity: "Portfolio building", category: "portfolio", icon: "layers" },
    { time: "9:00 PM – 12:00 AM", activity: "Work, church, or personal commitments", category: "personal", icon: "calendar" },
    { time: "12:00 AM – 4:30 AM", activity: "Personal time / optional work / rest", category: "personal", icon: "moon" },
    { time: "4:30 AM – 5:00 AM", activity: "Wind down", category: "sleep", icon: "moon" }
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
    ["routine", "Daily Schedule"], ["applications", "Job Applications"], ["portfolio", "My Portfolio"],
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
    ,database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>'
  };

  const icon = (name, extraClass = "") => `<svg class="icon ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sparkles}</svg>`;
  const clone = (value) => JSON.parse(JSON.stringify(value));

  function initialState() {
    return {
      lessonStatus: {},
      routine: {},
      academyStudied: {},
      applications: [],
      projects: PROJECT_TEMPLATES.map((project) => ({ ...clone(project), startDate: "", targetDate: "", status: "Not started", checklist: {}, notes: "", evidence: null }))
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return initialState();
      const defaults = initialState();
      const storedProjects = Array.isArray(saved.projects) ? saved.projects : [];
      return {
        lessonStatus: saved.lessonStatus && typeof saved.lessonStatus === "object" ? saved.lessonStatus : {},
        routine: saved.routine && typeof saved.routine === "object" ? saved.routine : {},
        academyStudied: saved.academyStudied && typeof saved.academyStudied === "object" ? saved.academyStudied : {},
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
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  function programDate(day) {
    return new Date(PROGRAM_YEAR, 11, day);
  }

  function formatDate(date, options = { month: "short", day: "numeric", year: "numeric" }) {
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  function daysUntilStart() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = programDate(1);
    start.setHours(0, 0, 0, 0);
    return Math.round((start - today) / 86400000);
  }

  function greeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }

  function counts() {
    const totalLessons = LESSONS.reduce((sum, day) => sum + day.tasks.length, 0);
    const completedLessons = LESSONS.reduce((sum, day) => sum + day.tasks.reduce((n, _, index) => n + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0), 0);
    const completedDays = LESSONS.reduce((sum, day) => sum + (day.tasks.every((_, index) => state.lessonStatus[`d${day.day}-l${index}`]) ? 1 : 0), 0);
    const completedProjects = state.projects.filter((project) => project.status === "Completed").length;
    const studiedResources = ACADEMIES.filter((resource) => state.academyStudied[resource.name]).length;
    const todayRoutine = state.routine[todayKey()] || {};
    const completedRoutine = ROUTINE.reduce((sum, item) => sum + (todayRoutine[item.activity] ? 1 : 0), 0);
    const submittedStatuses = new Set(["Applied", "Interview", "Assessment", "Hired", "Rejected", "Follow-up needed"]);
    const applicationsSubmitted = state.applications.filter((application) => submittedStatuses.has(application.status)).length;
    const trackCounts = Object.fromEntries(TRACKS.map((track) => [track.id, { total: 0, completed: 0 }]));
    LESSONS.forEach((day) => {
      trackCounts[day.track].total += day.tasks.length;
      day.tasks.forEach((_, index) => {
        if (state.lessonStatus[`d${day.day}-l${index}`]) trackCounts[day.track].completed += 1;
      });
    });
    return { totalLessons, completedLessons, completedDays, completedProjects, studiedResources, completedRoutine, applicationsSubmitted, trackCounts };
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

  function dateForDay(day) {
    return formatDate(programDate(day), { weekday: "short", month: "short", day: "numeric" });
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

  function trackCard(track) {
    const c = counts().trackCounts[track.id];
    const pct = percentage(c.completed, c.total);
    return `<article class="track-card">
      <div class="track-card-top"><div class="track-icon ${track.tone}">${icon(track.icon)}</div><span class="track-percent" data-track-percent="${escapeHtml(track.id)}">${pct}%</span></div>
      <h3>${track.title}</h3><p>${track.description}</p>
      <div class="track-progress-copy"><span><strong data-track-done="${escapeHtml(track.id)}">${c.completed}</strong> of <span data-track-total="${escapeHtml(track.id)}">${c.total}</span> lessons</span><span data-track-pct-copy="${escapeHtml(track.id)}">${pct}%</span></div>
      ${progressBar(pct, track.tone, `${track.title} progress`)}
      <button class="text-button track-open" data-route="learning" data-track="${escapeHtml(track.id)}">View learning plan <span aria-hidden="true">→</span></button>
    </article>`;
  }

  function renderDashboard() {
    const c = counts();
    const remaining = daysUntilStart();
    const status = remaining > 0 ? `Your program begins in ${remaining} ${remaining === 1 ? "day" : "days"}` : remaining === 0 ? "Your learning journey starts today" : "Your December journey is underway";
    const submitted = c.applicationsSubmitted;
    return `${topLevelHeader("YOUR LEARNING SPACE", `${greeting()}, Gabriel!`, "Welcome to your December Learning Journey.", `<span class="program-pill"><span class="status-dot"></span>${escapeHtml(status)}</span>`)}
      <section class="hero-progress card">
        <div class="hero-progress-copy"><div class="hero-title-line"><div class="hero-icon">${icon("calendarDays")}</div><div><span class="eyebrow">DECEMBER 1–30, 2026</span><h2>December Learning Progress</h2></div></div>
          <p>Small steps, steady practice, and a portfolio you can show with confidence.</p>
          <div class="hero-progress-foot"><span><strong data-value="completedDays">${c.completedDays}</strong> / 30 days completed</span><span><strong data-value="completedLessons">${c.completedLessons}</strong> / <span data-value="totalLessons">${c.totalLessons}</span> lessons completed</span></div>
        </div>
        <div class="hero-progress-score"><strong data-value="overallPercent">${percentage(c.completedLessons, c.totalLessons)}%</strong><span>overall progress</span>${progressBar(percentage(c.completedLessons, c.totalLessons), "emerald", "Monthly learning progress")}</div>
      </section>
      <section class="metric-grid" aria-label="Learning overview">
        ${metricCard("calendarDays", "Days completed", `<span data-value="completedDays">${c.completedDays}</span><small> / 30</small>`, "Complete every task in a day", "blue")}
        ${metricCard("book", "Lessons completed", `<span data-value="completedLessons">${c.completedLessons}</span><small> / <span data-value="totalLessons">${c.totalLessons}</span></small>`, "Across your learning plan", "green")}
        ${metricCard("briefcase", "Applications submitted", `<span data-value="applicationsSubmitted">${submitted}</span>`, "Tracked in your job pipeline", "purple")}
        ${metricCard("layers", "Projects completed", `<span data-value="completedProjects">${c.completedProjects}</span><small> / 5</small>`, "Portfolio projects marked complete", "orange")}
      </section>
      <section class="section-block"><div class="section-heading"><div><div class="eyebrow">YOUR LEARNING PATHS</div><h2>Build skills that move you forward</h2></div><button class="text-button" data-route="learning">Open full plan <span aria-hidden="true">→</span></button></div>
        <div class="track-grid">${TRACKS.slice(0, 5).map(trackCard).join("")}</div>
      </section>
      <section class="bottom-grid">
        <article class="next-step-card card"><div class="next-step-icon">${icon("sparkles")}</div><div><div class="eyebrow">A GOOD PLACE TO START</div><h3>Make your next learning session count</h3><p>Open today's plan, work through one task at a time, and your progress will update automatically.</p><button class="button button-primary" data-route="learning">Open my learning plan <span aria-hidden="true">→</span></button></div></article>
        <article class="academy-callout card"><div class="callout-icon">${icon("compass")}</div><div class="eyebrow">KEEP EXPLORING</div><h3>Learn from the source</h3><p>Find official academies, documentation, and support resources in one place.</p><button class="button button-secondary" data-route="academy">Browse the academy</button></article>
      </section>`;
  }

  function renderLearning() {
    const c = counts();
    return `${topLevelHeader("DECEMBER 1–30, 2026", "My Learning Plan", "Thirty focused days, organized into clear phases. Check off each lesson as you complete it.", `<div class="mini-total"><strong data-value="completedLessons">${c.completedLessons}</strong><span> / <span data-value="totalLessons">${c.totalLessons}</span> lessons</span></div>`)}
      <section class="plan-summary card"><div><span class="eyebrow">MONTHLY COMPLETION</span><h2><span data-value="overallPercent">${percentage(c.completedLessons, c.totalLessons)}%</span> of your plan completed</h2><p><span data-value="completedDays">${c.completedDays}</span> of 30 days fully complete</p></div><div class="plan-summary-progress">${progressBar(percentage(c.completedLessons, c.totalLessons), "emerald", "Learning plan progress")}</div></section>
      <div class="phase-intro"><div class="eyebrow">THE 30-DAY ROADMAP</div><p>Open a day to see its lessons. Your check-offs save automatically in this browser.</p></div>
      <div class="phase-list">${PHASES.map((phase) => {
        const days = LESSONS.filter((day) => day.day >= phase.start && day.day <= phase.end);
        return `<section class="phase-section"><div class="phase-heading"><div class="phase-marker ${phase.tone}"></div><div><h2>${phase.title}</h2><span>${phase.range} <span class="separator-dot">·</span> ${days.length} days</span></div></div>
          <div class="day-list">${days.map((day) => renderDay(day, phase.tone)).join("")}</div></section>`;
      }).join("")}</div>`;
  }

  function renderDay(day, tone) {
    const done = day.tasks.reduce((sum, _, index) => sum + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0);
    const complete = done === day.tasks.length;
    const today = todayKey() === `2026-12-${String(day.day).padStart(2, "0")}`;
    const dayLabel = complete ? "Complete" : today ? "Today" : `${day.tasks.length - done} to go`;
    return `<details class="day-card" data-day="${day.day}" data-day-track="${escapeHtml(day.track)}" ${today ? "open" : ""}>
      <summary><span class="day-number ${tone} ${complete ? "is-complete" : ""}">${complete ? icon("check") : String(day.day).padStart(2, "0")}</span><span class="day-summary-main"><span class="day-date">${dateForDay(day.day)}${today ? '<span class="today-tag">TODAY</span>' : ""}</span><strong>${day.title}</strong></span><span class="day-track-tag">${escapeHtml(day.track === "Career" ? "Career" : day.track)}</span><span class="day-progress"><strong data-day-done="${day.day}">${done}</strong> / ${day.tasks.length}<span class="day-progress-label"> complete</span></span><span class="day-status ${complete ? "is-complete" : ""}" data-day-status="${day.day}">${dayLabel}</span><span class="chevron" aria-hidden="true">⌄</span></summary>
      <div class="day-details"><div class="day-detail-header"><span>LESSONS & ACTIVITIES</span><span>CHECK OFF AS YOU GO</span></div><div class="lesson-list">${day.tasks.map((task, index) => {
        const id = `d${day.day}-l${index}`;
        const checked = state.lessonStatus[id] ? "checked" : "";
        return `<label class="lesson-row ${checked ? "is-checked" : ""}"><input type="checkbox" data-lesson="${id}" data-day-id="${day.day}" ${checked} aria-label="Mark ${escapeHtml(task)} complete"><span class="custom-check" aria-hidden="true">${icon("check")}</span><span>${escapeHtml(task)}</span></label>`;
      }).join("")}</div></div></details>`;
  }

  function renderAcademy() {
    const c = counts();
    const groups = [...new Set(ACADEMIES.map((resource) => resource.category))];
    const actions = `<span class="studied-summary">${icon("check")} <strong data-value="studiedResources">${c.studiedResources}</strong> / ${ACADEMIES.length} studied</span>`;
    return `${topLevelHeader("LEARNING RESOURCES", "Learning Academy", "Official learning platforms and trusted resources, grouped by the skills you're building.", actions)}
      <div class="resource-note"><span class="resource-note-icon">${icon("sparkles")}</span><p>Course availability and pricing can change. Check each academy for current details.</p></div>
      ${groups.map((group) => `<section class="section-block academy-group"><div class="section-heading"><div><div class="eyebrow">${group === "AI" ? "AI & CUSTOMER SUPPORT" : escapeHtml(group.toUpperCase())}</div><h2>${group === "AI" ? "AI learning" : `${escapeHtml(group)} learning`}</h2></div><span class="resource-count">${ACADEMIES.filter((item) => item.category === group).length} resources</span></div><div class="academy-grid">${ACADEMIES.filter((item) => item.category === group).map(renderAcademyCard).join("")}</div></section>`).join("")}`;
  }

  function renderAcademyCard(resource) {
    const studied = Boolean(state.academyStudied[resource.name]);
    return `<article class="academy-card card ${studied ? "resource-studied" : ""}"><div class="academy-card-head"><div class="academy-icon ${resource.category.toLowerCase().replace(/[^a-z]/g, "")}">${icon(resource.icon)}</div><span class="resource-category">${escapeHtml(resource.category)}</span></div><h3>${escapeHtml(resource.name)}</h3><p>${escapeHtml(resource.description)}</p><div class="academy-card-footer"><a class="button button-outline" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">Start learning ${icon("arrow")}</a><label class="studied-check"><input type="checkbox" data-academy="${escapeHtml(resource.name)}" ${studied ? "checked" : ""}><span class="custom-check" aria-hidden="true">${icon("check")}</span><span>Studied</span></label></div></article>`;
  }

  function renderRoutine() {
    const c = counts();
    const checked = c.completedRoutine;
    return `${topLevelHeader("YOUR DAILY RHYTHM", "My Daily Routine", "A repeatable schedule that makes space for learning, job hunting, and rest.", `<span class="routine-date-chip">${icon("calendarDays")} ${formatDate(new Date(), { weekday: "long", month: "short", day: "numeric" })}</span>`)}
      <section class="routine-summary card"><div class="routine-summary-icon">${icon("clock")}</div><div><span class="eyebrow">TODAY'S CHECKLIST</span><h2><span data-routine-done>${checked}</span> of ${ROUTINE.length} activities complete</h2><p>Check off activities as you finish them. Check-offs are saved by date.</p></div><div class="routine-summary-bar">${progressBar(percentage(checked, ROUTINE.length), "blue", "Today's routine progress")}</div></section>
      <section class="routine-list" aria-label="Daily schedule">${ROUTINE.map((item, index) => {
        const done = Boolean((state.routine[todayKey()] || {})[item.activity]);
        return `<article class="routine-item ${item.category} ${done ? "routine-done" : ""}"><div class="routine-time">${escapeHtml(item.time)}</div><div class="routine-timeline"><span class="routine-dot"></span>${index < ROUTINE.length - 1 ? '<span class="routine-line"></span>' : ""}</div><div class="routine-activity-icon">${icon(item.icon)}</div><div class="routine-copy"><strong>${escapeHtml(item.activity)}</strong><span>${escapeHtml(routineCategoryLabel(item.category))}</span></div><label class="routine-check-label"><input type="checkbox" data-routine="${escapeHtml(item.activity)}" ${done ? "checked" : ""} aria-label="Mark ${escapeHtml(item.activity)} complete"><span class="custom-check" aria-hidden="true">${icon("check")}</span><span class="sr-only">Complete</span></label></article>`;
      }).join("")}</section>
      <p class="routine-footnote">Your schedule check-offs are for the current date and begin fresh each day.</p>`;
  }

  function routineCategoryLabel(category) {
    return ({ sleep: "Sleep & wind down", learning: "Learning", job: "Job hunting", portfolio: "Portfolio", personal: "Personal time" })[category] || "Personal time";
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
    return `${topLevelHeader("YOUR MONTH AT A GLANCE", "Progress Report", "A live view of your lessons, learning paths, resources, and portfolio milestones.", `<button class="button button-outline" data-action="download-backup">${icon("download")} Download backup</button>`)}
      <section class="report-hero card"><div><div class="eyebrow">DECEMBER LEARNING JOURNEY</div><h2>Progress that adds up.</h2><p>Every checked lesson contributes to your monthly completion.</p><div class="report-hero-numbers"><div><strong data-value="completedLessons">${c.completedLessons}</strong><span>lessons completed</span></div><div><strong data-value="completedDays">${c.completedDays}<small> / 30</small></strong><span>days complete</span></div><div><strong data-value="overallPercent">${overall}%</strong><span>overall progress</span></div></div></div><div class="report-ring" style="--progress:${overall}%"><div><strong data-value="overallPercent">${overall}%</strong><span>COMPLETE</span></div></div></section>
      <section class="section-block report-tracks"><div class="section-heading"><div><div class="eyebrow">SKILLS BY TRACK</div><h2>Learning path progress</h2></div><span class="resource-count">${c.totalLessons} lessons total</span></div><div class="report-track-list">${TRACKS.map((track) => renderTrackReport(track, c.trackCounts[track.id])).join("")}</div></section>
      <section class="section-block"><div class="section-heading"><div><div class="eyebrow">DAY BY DAY</div><h2>Thirty-day completion</h2></div><span class="subtle-count"><strong data-value="completedDays">${c.completedDays}</strong> / 30 days</span></div><div class="report-days card">${LESSONS.map((day) => {
        const done = day.tasks.reduce((sum, _, index) => sum + (state.lessonStatus[`d${day.day}-l${index}`] ? 1 : 0), 0);
        return `<div class="report-day-row"><span class="report-day-number">${String(day.day).padStart(2, "0")}</span><span class="report-day-title"><strong>${escapeHtml(day.title)}</strong><small>${dateForDay(day.day)} · ${escapeHtml(day.track)}</small></span><span class="report-day-count"><strong data-day-done="${day.day}">${done}</strong> / ${day.tasks.length}</span><div class="report-day-progress">${progressBar(percentage(done, day.tasks.length), done === day.tasks.length ? "emerald" : "blue", `Day ${day.day} completion`)}</div><span class="report-day-pct" data-day-pct="${day.day}">${percentage(done, day.tasks.length)}%</span></div>`;
      }).join("")}</div></section>
      <section class="report-lower-grid"><article class="report-stat-card card"><div class="metric-icon green">${icon("compass")}</div><span class="metric-label">Academy resources studied</span><strong><span data-value="studiedResources">${c.studiedResources}</span> <small>/ ${ACADEMIES.length}</small></strong><button class="text-button" data-route="academy">View learning academy →</button></article><article class="report-stat-card card"><div class="metric-icon purple">${icon("layers")}</div><span class="metric-label">Portfolio projects completed</span><strong><span data-value="completedProjects">${c.completedProjects}</span> <small>/ 5</small></strong><button class="text-button" data-route="portfolio">View your portfolio →</button></article><article class="report-stat-card card"><div class="metric-icon blue">${icon("briefcase")}</div><span class="metric-label">Applications submitted</span><strong><span data-value="applicationsSubmitted">${c.applicationsSubmitted}</span></strong><button class="text-button" data-route="applications">Open job tracker →</button></article></section>`;
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
      <section class="settings-card card settings-about"><div class="settings-card-icon">${icon("calendarDays")}</div><div class="eyebrow">PROGRAM DETAILS</div><h2>30-Day Digital Skills & Career Development Program</h2><p>Gabriel Valdez's Learning Hub is set up for December 1–30, 2026. Daily lesson totals are calculated from the curriculum, so progress denominators stay in sync with the tasks you see.</p><div class="settings-program-row"><span>Program dates</span><strong>December 1–30, 2026</strong></div><div class="settings-program-row"><span>Learning tasks</span><strong>${c.totalLessons} across 30 days</strong></div><div class="settings-program-row"><span>Academy resources</span><strong>${ACADEMIES.length}</strong></div></section></div>`;
  }

  const PAGE_RENDERERS = {
    dashboard: renderDashboard, learning: renderLearning, academy: renderAcademy,
    routine: renderRoutine, applications: renderApplications, portfolio: renderPortfolio,
    progress: renderProgress, settings: renderSettings
  };

  function renderApp() {
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
    if (route === "learning" && track) {
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
      studiedResources: c.studiedResources
    };
    Object.entries(values).forEach(([key, value]) => document.querySelectorAll(`[data-value="${key}"]`).forEach((node) => { node.textContent = value; }));
    const overall = percentage(c.completedLessons, c.totalLessons);
    document.querySelectorAll('[aria-label="Monthly learning progress"], [aria-label="Learning plan progress"]').forEach((bar) => setProgress(bar, overall));
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
    document.querySelectorAll('[aria-label="Today\'s routine progress"]').forEach((bar) => setProgress(bar, percentage(c.completedRoutine, ROUTINE.length)));
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
    const backup = { product: "Gabriel Valdez's Learning Hub", version: 1, exportedAt: new Date().toISOString(), data: state };
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

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      navigate(routeButton.dataset.route, routeButton.dataset.track || "");
      return;
    }
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.action;
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
    if (action === "reset-data" && window.confirm("Clear all learning progress, schedule check-offs, academy marks, applications, project checklists, notes, and screenshots saved in this browser? This cannot be undone.")) {
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
    if (element.matches("[data-academy]")) {
      state.academyStudied[element.dataset.academy] = element.checked;
      element.closest(".academy-card")?.classList.toggle("resource-studied", element.checked);
      saveState(); updateProgressWidgets();
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
  });

  document.addEventListener("submit", (event) => {
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
})();

