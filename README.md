# image-resizing-private-r2
without binding

```
wrangler secret put ACCOUNT_ID
wrangler secret put ACCESS_KEY_ID
wrangler secret put SECRET_ACCESS_KEY
```
Change this part with your bucket and file name.
```
const R2_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/private-bucket/test-image.jpeg`
```
