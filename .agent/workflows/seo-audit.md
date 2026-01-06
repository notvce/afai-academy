---
description: Complete SEO audit following Google best practices and AI search optimization
---

# SEO Audit Workflow

This workflow performs a comprehensive SEO audit for any web application, ensuring compliance with Google's best practices and optimization for AI search engines (Gemini, ChatGPT, Perplexity).

## Pre-requisites

- Development server running (`npm run dev` or equivalent)
- Access to the browser tool for visual verification

---

## Phase 1: Technical SEO Analysis

### 1.1 Meta Tags Audit

// turbo

```bash
grep -r "<title" src/ --include="*.html" --include="*.tsx" --include="*.jsx" | head -20
```

Check for:

- [ ] Unique `<title>` tags on each page (50-60 characters)
- [ ] Meta descriptions present (150-160 characters)
- [ ] Canonical URLs defined
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags

### 1.2 Structured Data (Schema.org)

// turbo

```bash
grep -rn "application/ld+json" src/ --include="*.tsx" --include="*.jsx" --include="*.html"
```

Verify JSON-LD schemas for:

- [ ] Organization/LocalBusiness
- [ ] WebSite with SearchAction
- [ ] BreadcrumbList
- [ ] Product/Service (if applicable)
- [ ] FAQ (if applicable)
- [ ] Article/BlogPosting (if applicable)

### 1.3 Robots & Sitemap

// turbo

```bash
ls -la public/robots.txt public/sitemap.xml 2>/dev/null || echo "Missing robots.txt or sitemap.xml"
```

- [ ] `robots.txt` exists and is correctly configured
- [ ] `sitemap.xml` exists and lists all important pages
- [ ] No important pages blocked by robots.txt

---

## Phase 2: Content & Semantic HTML

### 2.1 Heading Structure

// turbo

```bash
grep -rn "<h1\|<h2\|<h3" src/ --include="*.tsx" --include="*.jsx" | head -30
```

- [ ] Single `<h1>` per page
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] Descriptive, keyword-rich headings

### 2.2 Semantic HTML Elements

// turbo

```bash
grep -rn "<main\|<nav\|<article\|<section\|<aside\|<header\|<footer" src/ --include="*.tsx" --include="*.jsx" | wc -l
```

- [ ] Using semantic elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`)
- [ ] Proper landmark roles for accessibility

### 2.3 Image Optimization

// turbo

```bash
grep -rn "<img\|Image" src/ --include="*.tsx" --include="*.jsx" | head -20
```

- [ ] All images have `alt` attributes
- [ ] Descriptive alt text (not generic like "image")
- [ ] Images optimized (WebP format preferred)
- [ ] Lazy loading implemented for below-fold images

---

## Phase 3: Performance SEO

### 3.1 Core Web Vitals Check

Use browser tool to run Lighthouse audit:

1. Navigate to the deployed site
2. Open DevTools → Lighthouse
3. Run audit for Performance, Accessibility, Best Practices, SEO

Target scores:

- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### 3.2 Mobile Responsiveness

- [ ] Viewport meta tag present
- [ ] Touch targets appropriately sized (48x48px minimum)
- [ ] No horizontal scrolling on mobile
- [ ] Text readable without zooming

---

## Phase 4: AI Search Engine Optimization

### 4.1 LLM-Friendly Content

- [ ] Clear, concise content structure
- [ ] FAQ sections with direct answers
- [ ] Fact-based, authoritative content
- [ ] Natural language that AI can easily parse

### 4.2 AI Discovery Files

// turbo

```bash
ls -la public/llms.txt public/ai.txt public/.well-known/ai-plugin.json 2>/dev/null || echo "AI discovery files not found"
```

Create if missing:

- [ ] `llms.txt` - Instructions for LLMs about the site
- [ ] Structured content summaries for AI crawlers

### 4.3 Perplexity/Gemini Optimization

- [ ] Content answers common questions directly
- [ ] Sources and citations included where relevant
- [ ] Expertise, Authority, Trust (E-A-T) signals present

---

## Phase 5: Link Analysis

### 5.1 Internal Linking

// turbo

```bash
grep -rn "href=\"/\|to=\"/" src/ --include="*.tsx" --include="*.jsx" | wc -l
```

- [ ] Important pages have multiple internal links
- [ ] Descriptive anchor text (not "click here")
- [ ] Breadcrumb navigation implemented

### 5.2 External Links

- [ ] External links use `rel="noopener noreferrer"`
- [ ] Outbound links to authoritative sources
- [ ] No broken links

---

## Phase 6: International SEO (if applicable)

- [ ] `lang` attribute on `<html>` tag
- [ ] `hreflang` tags for multi-language sites
- [ ] Localized content and URLs

---

## Phase 7: Security & Trust

### 7.1 HTTPS & Security Headers

- [ ] Site served over HTTPS
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] No mixed content warnings

### 7.2 Trust Signals

- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Contact information visible
- [ ] About page with team/company info

---

## Output: SEO Report

After completing the audit, create a report in the artifacts directory:

```markdown
# SEO Audit Report - [Site Name]

Date: [Current Date]

## Overall Score: [X/100]

### Technical SEO: [X/25]

- Meta tags: ✅/❌
- Structured data: ✅/❌
- Robots & Sitemap: ✅/❌

### Content SEO: [X/25]

- Heading structure: ✅/❌
- Semantic HTML: ✅/❌
- Image optimization: ✅/❌

### Performance: [X/25]

- Core Web Vitals: ✅/❌
- Mobile responsiveness: ✅/❌

### AI Optimization: [X/25]

- LLM-friendly content: ✅/❌
- AI discovery files: ✅/❌

## Priority Fixes

1. [High priority issue]
2. [Medium priority issue]
3. [Low priority issue]

## Recommendations

- [Recommendation 1]
- [Recommendation 2]
```

---

## Quick Commands Reference

// turbo-all

```bash
# Full meta audit
grep -rn "title\|description\|og:\|twitter:" src/ --include="*.tsx" --include="*.html" | head -50

# Schema.org check
grep -rn "schema.org\|application/ld+json" src/ public/ --include="*.tsx" --include="*.html" --include="*.json"

# Accessibility quick check
grep -rn "aria-\|role=" src/ --include="*.tsx" --include="*.jsx" | wc -l

# Alt text check
grep -rn "alt=" src/ --include="*.tsx" --include="*.jsx" | head -20
```
