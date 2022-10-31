import { AwsClient } from 'aws4fetch'

const aws = new AwsClient({
	accessKeyId: ACCESS_KEY_ID,
	secretAccessKey: SECRET_ACCESS_KEY,
	service: "s3",
	region: "auto",
});

//const ListBucketsResult = aws.fetch(R2_URL);
//console.log(ListBucketsResult.text());

addEventListener('fetch', function (event) {
	event.respondWith(handleRequest(event.request))
});

const R2_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/kyouhei-public/cloudflare_jp.jpeg`

async function handleRequest(request) {
	var signedRequest = await aws.sign(R2_URL);
	return await fetch(signedRequest, {
		"cf": {
			// resolveOverride,
			cacheEverything: true,
			cacheTtl: 3,
			image: {
				//anim: true,
				//background: "#RRGGBB",
				//blur: 50,
				//border: {color: "#FFFFFF", width: 10},
				//brightness: 0.5,
				//compression: "fast",
				//contrast: 0.5,
				//dpr: 1,
				//fit: "scale-down",
				//format: "webp",
				//gamma: 0.5,
				//gravity: "auto",
				//height: 250,
				//metadata: "keep",
				//onerror: "redirect",
				//quality: 50,
				rotate: 90,
				"origin-auth": "share-publicly"
				//sharpen: 2,
				//trim: {"top": 12,  "right": 78, "bottom": 34, "left": 56,},
				//width: 250,
			}
		}
	})
}