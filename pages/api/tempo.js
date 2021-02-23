async function tempo(request, response) {
	const apiSecret = process.env.CONVERTKIT_API_SECRET;
	const dynamicDate = new Date();
	
	const subscribersResponse = await fetch('https://api_convertkit.com/v3/subscr')
	const subscribersResponseJson = await subscribersResponse.json();
	const inscritos = subscribersResponseJson.total_subscribers;
	
	response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidade');
	
	response.json({
		date: dynamicDate.toGMTString(),
		inscritos: inscritos
	});
}