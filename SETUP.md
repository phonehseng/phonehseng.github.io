# Your personal website

Double-click `index.html` to open it in your browser. The design, project descriptions, playful touches, and original résumé PDF are all inside that one file. No installation or separate PDF is needed. To edit the page, open `index.html` in a text editor, save your changes, and refresh the browser. When using Notepad's Save As, choose **All files** so it stays `index.html`, not `index.html.txt`.

**Editing the page**

Everything you would change lives near the top of the `<script>` block in `index.html`: the "right now" lines, the fact pills, and the scrapbook list. Images, logos, and the résumé PDF are embedded at the very bottom of the file so the page works as a single file; leave that block alone. Videos are too large to embed, so they sit next to `index.html` as plain files and must be uploaded with it.

**Update your résumé or wording**

The résumé download is embedded in the HTML. To replace it later, put a new PDF named `resume.pdf` beside `index.html`, then in the assets block at the bottom of the file change the `resumePdf` value to `'resume.pdf'`. Upload both files together from then on. The visible résumé summary and About text are separate HTML text, so update those too if needed.


You can edit project titles, descriptions, and links directly in the HTML. Project descriptions from private repositories are included in this website and will be visible when you publish it. Publishing this page does not change the repositories' permissions: the actual private code remains restricted, and visitors without access cannot open those repository links.

**Put your website on phonehseng.com**

Your HTML file needs a host: a service that makes the files available online. GitHub Pages fits this plain HTML website and is available for public repositories on GitHub Free. Your domain's DNS settings then point visitors to that host. You can keep the domain where you purchased it. [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. **Upload the website.** Create a public GitHub repository named `phonehseng.github.io`. Upload `index.html`, `.nojekyll`, and any video files that sit next to it. The original résumé is embedded, so a separate PDF is only needed if you switch to the replacement method above. Keep `index.html` at the top level; upload the contents, not an enclosing folder or ZIP. Include an empty `.nojekyll` file to serve the static files without Jekyll processing. [Create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

2. **Turn on hosting.** In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**, and click **Save**. Changes committed to that branch update the site. Check the published address shown on this page. [Configure publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

3. **Verify you own the domain.** Open your personal GitHub **Settings → Pages → Add a domain**. Enter `phonehseng.com`. GitHub supplies a TXT record with a unique value; add that exact record in your domain's DNS dashboard. Return to GitHub and click **Verify** once available. Keep this TXT record afterward. [Verify a domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

4. **Connect the domain in GitHub first.** Return to the website repository's **Settings → Pages**. In **Custom domain**, enter `phonehseng.com` and save. GitHub creates a `CNAME` file for this branch-based setup; keep it when updating the website. Its only line should be `phonehseng.com`. You do not need to create it yourself. Do this before changing the website's DNS records. [Connect a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

5. **Update the website DNS records.** In your domain's DNS dashboard, add the following records. `@` means the bare domain `phonehseng.com`; some providers use a blank field or the full domain instead. Keep the default TTL. The `www` target has no `https://`, slash, or repository name. [GitHub DNS records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | phonehseng.github.io |

Replace conflicting parking or old hosting records for `@` and `www`. Keep unrelated records, especially email records: MX, SPF, DKIM, and DMARC. Do not erase the entire DNS zone. Existing apex AAAA records for an old host must also be removed or changed to GitHub's IPv6 values, since mismatched records can prevent HTTPS from working. [HTTPS DNS troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

6. **Enable HTTPS.** Allow up to 24 hours for DNS changes and certificate availability. Then return to repository **Settings → Pages** and select **Enforce HTTPS** when enabled. Visit both `https://phonehseng.com` and `https://www.phonehseng.com`; with both records configured, `www` should redirect to the bare domain. [HTTPS setup](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) · [Custom-domain redirects](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

To update the site later, upload the changed HTML and any new media or replacement résumé to the same repository. New versions can take up to ten minutes to appear. [Publishing updates](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

Hosting instructions checked against GitHub's documentation on September 14, 2026. The files are ready for you to publish; no website has been published and no domain settings have been changed.
