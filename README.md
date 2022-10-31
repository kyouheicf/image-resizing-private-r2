# image-resizing-private-r2
(without binding)

`git clone` first then

```
wrangler secret put ACCOUNT_ID
wrangler secret put ACCESS_KEY_ID
wrangler secret put SECRET_ACCESS_KEY
```
Change this part with your bucket and file name.
```
const R2_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/private-bucket/test-image.jpeg`
```

Check your account_id and route in `wrangler.toml`

```
account_id = "xxx"
route = { pattern = "example.org/test-image.jpeg", zone_name = "example.org" }
```

Publish it to your Cloudflare account

```
npm install
npx wrangler publish src/index.js
```
