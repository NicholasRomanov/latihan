var pembelian = 100000;
var coupon = "free ongkir";

switch (coupon)
{
    case "free ongkir":
        if (pembelian >= 50000)
        {
            var total = pembelian*0.9;
            console.log("total anda rp." + total)
        }
        else if (pembelian >= 30000 && pembelian >50000)
        {
            var total = pembelian*0.95;
            console.log("total anda rp." + total)
        }
        else (pembelian < 30000 )
        {
            var total = pembelian*0.975;
            console.log("total anda rp." + total)
        }
    case "free 15%":
        if (pembelian >= 30000)
        {
            var total = pembelian*0.85;
            console.log("total anda rp." + total)
        }
        else (pembelian < 30000 )
        {
            var total = pembelian;
            console.log("total anda rp." + total)
        }
}