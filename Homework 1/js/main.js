const earphone=15.678;
const laptop=123.965;
const phone=90.2345;
document.getElementById("earphonePrice").innerHTML = earphone;
document.getElementById("laptopPrice").innerHTML = laptop;
document.getElementById("phonePrice").innerHTML = phone;

const sum=earphone+laptop+phone;
const sumRounded = (Math.trunc(earphone)+Math.trunc(laptop)+Math.trunc(phone));
const sumRoundedToHundred=Math.ceil(sum/100)*100;
const sumEven=sum%2===0 ? true : false;
const rest = (500-sum);
const sumAverage = Math.round((sum/3)*100)/100;
const randomDiscount = Math.round(Math.random()*100);
const sumWithDiscount = Math.round((sum-(sum*(randomDiscount/100)))*100)/100;
const profit = Math.round(((sum/2)-(sum*(randomDiscount/100)))*100)/100;

const result = `
	<table>
		<tr>
			<caption> Результат </caption>
		</tr>
		<tr>
			<td class="name">Максимальна ціна </td>
			<td class="value">${Math.max(earphone,laptop,phone)} </td>
		</tr>
		<tr>
			<td class="name">Мінімальна ціна </td>
			<td class="value">${Math.min(earphone,laptop,phone)} </td>
		</tr>
		<tr>
			<td class="name">Сума </td>
			<td class="value">${sum} </td>
		</tr>
		<tr>
			<td class="name">Сума товарів без копійок </td>
			<td class="value">${sumRounded} </td>
		</tr>
		<tr>
			<td class="name">Сума товарів округлена до сотень </td>
			<td class="value">${sumRoundedToHundred} </td>
		</tr>
		<tr>
			<td class="name">Чи парна сума всіх товарів? </td>
			<td class="value">${sumEven}
  			</td>
		</tr>
		<tr>
			<td class="name">Сума решти, якщо клієнт платить 500 грн </td>
			<td class="value">${rest} </td>
		</tr>
		<tr>
			<td class="name">Середнє значення цін округлене до другого знаку пісял коми </td>
			<td class="value">${sumAverage} </td>
		</tr>
		<tr>
			<td class="name">Знижка </td>
			<td class="value">${randomDiscount} %</td>
		</tr>
		<tr>
			<td class="name">Сума до оплати після знижки </td>
			<td class="value">${sumWithDiscount} </td>
		</tr>
		<tr>
			<td class="name">Прибуток </td>
			<td class="value">${profit} </td>
		</tr>
	</table> `;

document.getElementById("result").innerHTML = result;