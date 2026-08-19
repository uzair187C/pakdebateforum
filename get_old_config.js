const token = "cfoat_FSStS7LypBZB-dMC_3CfXd1IZM9Qi4n3ELiqyakOaVo.IiuJoWdZu9mUupBtTXL5xAkJAmOie8l17oNPL48uQF0";
const accountId = "c69c37676d67b06c88aa5e0ba421625f";

async function run() {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  const scripts = data.result.map(r => r.id);
  console.log("Scripts:", scripts);
  
  for (const script of scripts) {
    const sRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${script}/bindings`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const sData = await sRes.json();
    console.log(`Bindings for ${script}:`, JSON.stringify(sData.result));
  }
}
run();
