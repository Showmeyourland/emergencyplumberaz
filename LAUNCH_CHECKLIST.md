# AZ Home Cash Guy — Launch Checklist
*Generated 2026-05-28. Site is at 74 pages, fully audited, ready to go live at azhomecashguy.com.*

## Site state — verified clean

| Audit | Result |
|---|---|
| Pages built | **74** |
| Sitemap URLs | 73 (404 correctly excluded) |
| HTTP 200 rate on internal links | **100%** (15/15 spot-check) |
| SEO meta tags | **12/12 critical tags present** |
| Title tag length | 60 chars (perfect) |
| Description length | 146 chars (in 140-160 target) |
| Schema/JSON-LD per page | 1-4 blocks per page-type (LocalBusiness, Service, FAQPage, BreadcrumbList, Article) |
| HSTS / HTTPS forced | Yes |
| Mobile viewport | Yes |
| OG image | 86KB branded JPG, live at `/og-default.jpg` |
| Build time | 3.19s |
| Live URL | https://azhomecashguy.onrender.com |

## What Nathan needs to do (in order)

### STEP 1 — Add custom domain on Render (2 minutes)

1. Open: **https://dashboard.render.com/static/srv-d8bpebjtqb8s73a4rcp0**
2. Click **Settings** in the left sidebar
3. Click **Custom Domains** section
4. Click **Add Custom Domain**
5. Enter: `azhomecashguy.com`
6. Render displays the DNS records you need to add. Copy them.
7. Click **Add Custom Domain** a second time and add `www.azhomecashguy.com`
8. Render shows the second set of DNS records

**Typical Render DNS pattern (verify against what their dashboard shows):**
- **For `azhomecashguy.com` (apex/root):**
  - Type: `A`
  - Name: `@`
  - Value: `216.24.57.1` (Render's IP — confirm in dashboard)
- **For `www.azhomecashguy.com`:**
  - Type: `CNAME`
  - Name: `www`
  - Value: `azhomecashguy.onrender.com`

### STEP 2 — Add DNS records at registrar (5 minutes)

The domain is at GoDaddy (where you bought it).

1. Log into **godaddy.com**
2. Click **My Products** → find `azhomecashguy.com` → click **DNS**
3. Add the records Render gave you in Step 1
4. **Don't delete the existing records** unless they conflict. Just add the new ones.
5. **TTL: 600 (10 min)** — set short so propagation is fast tonight
6. Click **Save**

### STEP 3 — Wait for Render to verify (10-60 min)

Render's dashboard will automatically detect the DNS pointing and provision SSL via Let's Encrypt. Status will change to **Verified** + **Certificate Issued**.

If it takes more than 1 hour, check:
- DNS propagated? Run: `nslookup azhomecashguy.com` — should resolve to Render's IP
- Records correct? Double-check the values match what Render's dashboard showed

### STEP 4 — Once domain is live, add to Google Search Console (3 minutes)

1. Open: **https://search.google.com/search-console/welcome**
2. Pick **Domain** property (not URL prefix)
3. Enter: `azhomecashguy.com`
4. Google gives a TXT record to verify ownership
5. Add the TXT record at GoDaddy DNS (same place as Step 2)
6. Wait 5-10 min, then click **Verify** in GSC

### STEP 5 — Sitemap submission + indexing requests (1 minute via /gsc skill)

Once GSC has verified the property, tell me and I'll run:

```bash
gsc sitemap-submit --site sc-domain:azhomecashguy.com --url https://azhomecashguy.com/sitemap-index.xml
gsc inspect --site sc-domain:azhomecashguy.com --url https://azhomecashguy.com/
gsc inspect --site sc-domain:azhomecashguy.com --url https://azhomecashguy.com/phoenix/
gsc inspect --site sc-domain:azhomecashguy.com --url https://azhomecashguy.com/situations/foreclosure/
gsc inspect --site sc-domain:azhomecashguy.com --url https://azhomecashguy.com/blog/best-cash-home-buyers-phoenix/
```

That submits the sitemap (so Google crawls all 73 URLs) and requests priority indexing on the top 4 pages.

### STEP 6 — Update internal links to use real domain (I do this after Step 3 verifies)

Right now the site's `baseUrl` in `src/config.ts` is `https://azhomecashguy.onrender.com`. Once the custom domain is verified, I'll change it to `https://azhomecashguy.com`, push, and Render auto-deploys. All internal links + canonical URLs + sitemap URLs will reflect the real domain.

## Time estimate end-to-end

| Step | Time |
|---|---|
| 1 — Render dashboard custom domain add | 2 min |
| 2 — GoDaddy DNS records | 5 min |
| 3 — Wait for Render verification | 10-60 min |
| 4 — GSC property add + TXT verify | 5 min |
| 5 — Sitemap submit (via skill) | 1 min |
| 6 — Domain swap in config (via skill) | 2 min |
| **Total active work** | **15 min** |
| **Total elapsed time** | **30-90 min including DNS propagation** |

## Render service IDs (for reference)

- AZ Home Cash Guy: `srv-d8bpebjtqb8s73a4rcp0`
- Painted Desert Roofing: `srv-d8bpedjdho2c73emd1fg`

## What happens once everything is verified

- `azhomecashguy.com` and `www.azhomecashguy.com` both serve the site
- HTTPS automatic via Let's Encrypt
- Auto-deploy on every push to `main` branch
- Sitemap submitted to Google — initial indexation typically 3-7 days for first 5-10 pages, 14-30 days for full sitemap
- GSC starts collecting impression/click data after indexation begins

## Optional next moves after launch

1. **Add the 3 expired domains** (CashForHousesDepot, Sell-House-For-Cash, MyHouseCash at $36 total)
   - Park each, set up GSC for each, disavow spam, then 301 → azhomecashguy.com after 30-60 days
2. **Add a few hero images** to top pages (homepage, top 3 cities, top blog) via gpt-image-1 — Wave 9
3. **Set up CallRail** for inbound call tracking (if you choose option B from BUILD_PLAN Q1)
4. **Pick site #3** from the remaining 8 — Emergency Plumber or Divorce Lawyer next
