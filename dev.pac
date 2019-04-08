function wlxHost(host) {
	if([
	'wlx.tenpay.com',
	'mqq-image.gtimg.cn'
	].indexOf(host) !== -1) {
		return true;
	}
	else {
		return false;
	}
}

function FindProxyForURL(url, host)
{
    if (wlxHost(host)) { 
        return "PROXY 172.27.23.1:8888";
    }
        return "PROXY 172.27.23.1:8888";
}
