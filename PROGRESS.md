# Global Apheresis — Project Progress

Last updated: February 28, 2026

---

## Completed Pages

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Built |
| Therapeutic Plasma Exchange | `/treatments/therapeutic-plasma-exchange` | Built |
| Longevity Optimization | `/treatments/longevity-optimization` | Built |
| Alzheimer's & Cognitive Decline | `/treatments/alzheimers-cognitive-decline` | Built |
| Autoimmune Disorders | `/treatments/autoimmune-disorders` | Built |
| Post-Infectious Syndromes | `/treatments/post-infectious-syndromes` | Built |
| Cytoreduction & Stem Cell | `/treatments/cytoreduction-stem-cell` | Built |
| Lipid Apheresis | `/treatments/lipid-apheresis` | Built (Coming Soon) |
| Super Albumin | `/treatments/super-albumin` | Built (Coming Soon) |
| Treatments Overview | `/treatments` | Built |
| Physicians | `/physicians` | Built |
| Affiliates | `/affiliates` | Built |
| About / Our Story | `/about` | Built |
| Blog | `/blog` | Built |
| Blog Post (dynamic) | `/blog/[slug]` | Built |
| Contact | `/contact` | Built |
| Free Consultation | `/free-consultation` | Built |

**Total: 17 pages (15 unique + 1 overview + 1 dynamic blog route)**

---

## Completed Features

### Navigation
- Fixed header with scroll-aware styling (transparent to frosted glass on scroll)
- Two-column Services dropdown (Treatments column + Conditions column)
- Full mobile menu with expandable Services accordion
- "Book a Free Consultation" CTA button in nav
- Logo with transparent background sphere + "Global Apheresis" wordmark

### Footer
- Three-column nav (Practice, Resources, Connect)
- Social icons (YouTube, LinkedIn, Instagram)
- Brand tagline
- Copyright text

### Components
- `PageHero` — reusable hero section with label, title, subtitle
- `TreatmentLayout` — shared wrapper for treatment pages (hero, related treatments, CTA band)
- `FAQAccordion` — expandable Q&A sections
- `RevealOnScroll` — scroll-triggered animations with staggered delays

### Blog System
- Markdown-based blog posts stored in `content/blog/`
- YAML frontmatter (title, date, category, excerpt, slug)
- `lib/blog.ts` utility with `getAllPosts()`, `getPostBySlug()`, `getAllPostSlugs()`
- Dynamic route (`/blog/[slug]`) with `generateStaticParams`
- YouTube embed (featured video section)
- "Visit Channel" link to Global Apheresis YouTube

### Forms
- Free Consultation form (name, email, phone, area of interest dropdown, message)
- Contact form (name, email, phone, message)

### Research / Evidence Sections
- Research stat cards on TPE, Longevity, Alzheimer's, and Treatments overview pages
- AMBAR trial evidence section with comparison to monoclonal antibodies
- Biomarker tracking cards (Epigenetic Age, Inflammatory Markers, Proteomic Profile)
- Treatment comparison prose (TPE vs. monoclonal antibodies)

### Other
- Google Maps embed on Contact page
- Coming Soon badge system for Lipid Apheresis and Super Albumin
- Related Treatments grid on treatment detail pages
- CTA bands on every interior page
- Affiliate partner feature section (Dr. Gary Kaplan with photo, bio, and quote)
- Timeline on About page (1985 through 2025)
- Leadership team grid on Physicians page (4 staff members)

---

## Recent Fixes Applied

- **Timeline year corrections**: AMBAR entry changed from 2017 to 2020; Aging Cell entry changed from 2024 to 2025
- **Dr. Kiprov tags**: Replaced inaccurate tags with: "ASFA Founding Member", "100+ Publications", "15,000+ Treatments", "Harvard / MGH Fellowship"
- **TPE research attribution**: Changed "Kiprov et al." to "Kim et al." with Kiprov as co-author on the TPE page research card
- **Consultation dropdown**: "Longevity Optimization" changed to "Longevity & Health Optimization"; "Neurological Disorders" changed to "Autoimmune Disorders"
- **Footer LinkedIn**: Updated to Dr. Kiprov's personal LinkedIn profile
- **Footer cleanup**: Removed Privacy Policy and Terms of Use links
- **Logo background**: Removed white background from sphere PNG using sharp image processing
- **Apheresis text**: Darkened from gold-light to gold in wordmark
- **Hero subheading contrast**: Darkened italic subtitles from 70% opacity to full opacity across all pages (PageHero, homepage, about page)
- **Blog simplification**: Removed filter tabs (All/Articles/Videos/Research); renamed heading to "Articles"; changed label to "From the Practice"
- **YouTube embed**: Fixed from broken playlist embed to direct video embed (ID: LlD84yXxdGI)
- **PANS/PANDAS FAQ**: Removed "Many patients show significant improvement within days of treatment" sentence; simplified "how many treatments" answer
- **Treatments page**: Removed condition cards (Alzheimer's, Longevity, Autoimmune, Post-Infectious) from treatment hub; only treatment cards remain (TPE, Cytoreduction, Lipid Apheresis, Super Albumin)

---

## Outstanding / To Verify

### Requires Human Verification
- [ ] **Dr. Kiprov's start year**: The site says 1985 throughout. Verify this is the correct year he began practicing therapeutic apheresis.
- [ ] **PANS/PANDAS treatment course**: Language has been softened. Verify clinical accuracy of current FAQ answers with Dr. Kiprov.
- [ ] **Dr. Kaplan section**: Bio, quote, and photo on Affiliates page need Dr. Kaplan's explicit approval before going live.
- [ ] **Dr. Green bio**: Verify "500+ therapeutic plasma exchange procedures" figure and "UT Southwestern" residency details.

### Needs to Be Created (Not by AI)
- [ ] **Privacy Policy**: Must be drafted by a healthcare attorney. Link was removed from footer and needs to be re-added once the document exists.
- [ ] **Terms of Use**: Must be drafted by a healthcare attorney. Link was removed from footer and needs to be re-added once the document exists.

### Content Gaps
- [ ] **Blog articles**: All 3 existing posts have placeholder body content ("Full article coming soon."). Articles need to be written.
- [ ] **Peer-Reviewed Publications section**: Marked as "Coming in Phase 2" on the Blog page. Needs curated library of Dr. Kiprov's published research with downloadable PDFs and journal links.

### Coming Soon Features
- [ ] **Lipid Apheresis**: Page is built with overview and candidate information, but marked as "Coming Soon." Service not yet available.
- [ ] **Super Albumin**: Page is built with overview and benefits, but marked as "Coming Soon." Service not yet available.

### Technical / Functional
- [ ] **Form submission backend**: Both the consultation form and contact form are front-end only. No submission handler, API endpoint, or email integration is connected.
- [ ] **Google Maps embed**: Uses placeholder coordinates. Verify the pin location is accurate for 655 Redwood Highway, Suite 370, Mill Valley, CA 94941.
- [ ] **`prose-ga` CSS class**: Referenced in blog post template but may not be defined in globals.css. Verify blog post rendering styles.
- [ ] **SEO / Open Graph images**: Currently using the sphere logo PNG. Consider generating proper OG images for social sharing.
