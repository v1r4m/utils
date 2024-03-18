
# curl 'https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000' \
#   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
#   -H 'Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' \
#   -H 'Cache-Control: max-age=0' \
#   -H 'Connection: keep-alive' \
#   -H 'Content-Type: application/x-www-form-urlencoded' \
#   -H 'Cookie: WMONID=GRm9gBIaO8b; JSESSIONID_ETK=fWwaLMOykSNOicbDa4qhNI78ygqkVb2TkR1pVjFUmQypeUG5nWMb2WOahnSPsfoU.ZXRrcC9IRVRLQ09OMDItMg==; PCID=17107645398240657205619; RC_RESOLUTION=1512*982; RC_COLOR=30' \
#   -H 'Origin: https://etk.srail.kr' \
#   -H 'Referer: https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000' \
#   -H 'Sec-Fetch-Dest: document' \
#   -H 'Server-Timing: miss, db;dur=53, app;dur=47.2' \
#   -H 'Sec-Fetch-Mode: navigate' \
#   -H 'Sec-Fetch-Site: same-origin' \
#   -H 'Sec-Fetch-User: ?1' \
#   -H 'Upgrade-Insecure-Requests: 1' \
#   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' \
#   -H 'sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"' \
#   -H 'sec-ch-ua-mobile: ?0' \
#   -H 'sec-ch-ua-platform: "macOS"' \
#   --data-raw 'key=05481B41D7DB720C1317DBD11562A37B49C39FFBFC1B6BEE3FA9D492D2876C3038886252A1C1DAFBC840DD19E005DEB88C0806516DBC068005F230008E0FCFC8B5B5050A9618B0ABAF8EFC9E6550114233B916EF086BEB365DF3AFE3BCE13B9889DABEA6B3B0A5CAF5EEC604DBBA6912372C312C302C30&dptRsStnCd=0551&arvRsStnCd=0020&stlbTrnClsfCd=05&psgNum=1&seatAttCd=015&isRequest=Y&dptRsStnCdNm=%EC%88%98%EC%84%9C&arvRsStnCdNm=%EB%B6%80%EC%82%B0&dptDt=20240319&dptTm=000000&chtnDvCd=1&psgInfoPerPrnb1=1&psgInfoPerPrnb5=0&psgInfoPerPrnb4=0&psgInfoPerPrnb2=0&psgInfoPerPrnb3=0&locSeatAttCd1=000&rqSeatAttCd1=015&trnGpCd=109&dlayTnumAplFlg=Y'
import requests

url = "https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000"

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'WMONID=GRm9gBIaO8b; JSESSIONID_ETK=fWwaLMOykSNOicbDa4qhNI78ygqkVb2TkR1pVjFUmQypeUG5nWMb2WOahnSPsfoU.ZXRrcC9IRVRLQ09OMDItMg==; PCID=17107645398240657205619; RC_RESOLUTION=1512*982; RC_COLOR=30',
    'Origin': 'https://etk.srail.kr',
    'Referer': 'https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000',
    'Sec-Fetch-Dest': 'document',
    'Server-Timing': 'miss, db;dur=53, app;dur=47.2',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

data = 'key=05481B41D7DB720C1317DBD11562A37B49C39FFBFC1B6BEE3FA9D492D2876C3038886252A1C1DAFBC840DD19E005DEB88C0806516DBC068005F230008E0FCFC8B5B5050A9618B0ABAF8EFC9E6550114233B916EF086BEB365DF3AFE3BCE13B9889DABEA6B3B0A5CAF5EEC604DBBA6912372C312C302C30&dptRsStnCd=0551&arvRsStnCd=0020&stlbTrnClsfCd=05&psgNum=1&seatAttCd=015&isRequest=Y&dptRsStnCdNm=%EC%88%98%EC%84%9C&arvRsStnCdNm=%EB%B6%80%EC%82%B0&dptDt=20240319&dptTm=000000&chtnDvCd=1&psgInfoPerPrnb1=1&psgInfoPerPrnb5=0&psgInfoPerPrnb4=0&psgInfoPerPrnb2=0&psgInfoPerPrnb3=0&locSeatAttCd1=000&rqSeatAttCd1=015&trnGpCd=109&dlayTnumAplFlg=Y'

response = requests.post(url, headers=headers, data=data)

print(response.text)