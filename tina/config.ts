import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Content",
        path: "src/content",
        format: "json",
        match: { include: "site" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "available", label: "Availability Tag" },
              { type: "string", name: "nameFirst", label: "Name — First (outline)" },
              { type: "string", name: "nameLast", label: "Name — Last (filled)" },
              { type: "string", name: "role", label: "Role / Title" },
              { type: "string", name: "tagline", label: "Tagline", ui: { component: "textarea" } },
              { type: "string", name: "ctaButton", label: "Top-right Button Text" },
              { type: "string", name: "collaborateButton", label: "Collaborate Button Text" },
              { type: "string", name: "navWork", label: "Nav: Work" },
              { type: "string", name: "navServices", label: "Nav: Services" },
              { type: "string", name: "navExperience", label: "Nav: Experience" },
              { type: "string", name: "navContact", label: "Nav: Contact" },
              { type: "string", name: "linkedinUrl", label: "LinkedIn URL" },
              { type: "string", name: "driveUrl", label: "Drive URL" },
              { type: "string", name: "githubUrl", label: "GitHub URL" },
              { type: "string", name: "email", label: "Email" },
            ],
          },
          {
            type: "object", name: "stats", label: "Stats Strip", list: true,
            ui: { itemProps: (i: any) => ({ label: `${i?.value} — ${i?.label}` }) },
            fields: [
              { type: "string", name: "value", label: "Value (e.g. $10M)" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          {
            type: "object", name: "projects", label: "Projects", list: true,
            ui: { itemProps: (i: any) => ({ label: `${i?.number} — ${i?.category}` }) },
            fields: [
              { type: "string", name: "number", label: "Number (01, 02…)" },
              { type: "string", name: "category", label: "Category Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "tags", label: "Tags", list: true },
              { type: "string", name: "metric", label: "Metric Line" },
              { type: "string", name: "label", label: "Bottom Label (e.g. Case Study)" },
              { type: "string", name: "link", label: "Link URL" },
            ],
          },
          {
            type: "object", name: "services", label: "Services", list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "string", name: "title", label: "Service" },
              { type: "string", name: "subtitle", label: "Subtitle" },
            ],
          },
          {
            type: "object", name: "experience", label: "Experience", list: true,
            ui: { itemProps: (i: any) => ({ label: `${i?.company} — ${i?.role}` }) },
            fields: [
              { type: "string", name: "company", label: "Company" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "date", label: "Date Range" },
            ],
          },
          {
            type: "object", name: "process", label: "Process Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object", name: "steps", label: "Steps", list: true,
                ui: { itemProps: (i: any) => ({ label: i?.number }) },
                fields: [
                  { type: "string", name: "number", label: "Number (01 — RESEARCH)" },
                  { type: "string", name: "title", label: "Step Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "samples", label: "Sample Categories", list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "string", name: "title", label: "Category Title" },
              { type: "string", name: "items", label: "Items", list: true },
              { type: "string", name: "link", label: "Folder Link" },
            ],
          },
          {
            type: "object", name: "tools", label: "Tools & Stack",
            fields: [
              { type: "string", name: "technical", label: "Technical SEO", list: true },
              { type: "string", name: "keyword", label: "Keyword & Strategy", list: true },
              { type: "string", name: "analytics", label: "Analytics", list: true },
              { type: "string", name: "ai", label: "AI / GEO Stack", list: true },
            ],
          },
          {
            type: "object", name: "contact", label: "Contact Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "linkedinUrl", label: "LinkedIn URL" },
              { type: "string", name: "driveUrl", label: "Drive URL" },
              { type: "string", name: "githubUrl", label: "GitHub URL" },
            ],
          },
          { type: "string", name: "footer", label: "Footer Text" },
        ],
      },
    ],
  },
});
