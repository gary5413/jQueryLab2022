
        let hwnum = 5;
		let doc = document;
		doc.body.style.overflow = 'hidden';

		let item;
		let create = function (type, id) {
			item = doc.createElement(type);
			item.id = id;
		}
		// 產生導覽
		create('div', 'navi');
		item.style.width = '19.8%';
		item.style.height = '95vh';
		item.style.background = 'goldenrod';
		item.style.float = 'left';
		item.style.textAlign = 'center';
		item.style.fontSize = '30px';
		item.lineHeight = '20vh';

		doc.body.appendChild(item);

		// 產生書籤
		for (let i = 1, navi = doc.getElementById('navi'); i <= hwnum; i++) {
			create('a', 'hw' + i + 'lk');
			item.style.display = 'block';
			item.style.fontSize = '50px';
			item.style.lineHeight = '19vh';
			item.href = '#hw' + i;
			item.innerHTML = '作業' + i;
			item.style.textDecoration = 'none';
			item.style.color = 'white';
			item.style.borderRadius = '50px';

			item.onmouseover = aOver;
			item.onmouseout = aOut;

			navi.appendChild(item);
		}

		// 導覽效果
		function aOver() {
			this.style.background = 'Orange';
			this.style.textShadow = '0 0 10px white';
		}

		function aOut() {
			this.style.background = '';
			this.style.textShadow = '';
		}

		// 產生內容
		create('div', 'content');
		item.style.position = 'relative';
		item.style.width = '80%';
		item.style.height = '95vh';
		item.style.background = 'silver';
		item.style.float = 'right';
		item.style.overflow = 'hidden';

		doc.body.appendChild(item);

		// footer
		create('div', 'footer');
		item.style.position = 'absolute';
		item.style.width = '100%';
		item.style.height = '5vh';
		item.style.background = 'black';
		item.style.bottom = '0';
		item.style.lineHeight = '5vh';
		item.style.textAlign = 'center';
		item.style.color = 'white';
		item.style.fontSize = '18px';
		item.style.fontFamily = 'consola';
		item.style.textShadow = '0 0 5px white';
		item.innerHTML = '&copy; 2020 Institute for Information Industry EEIT113 JavaScript Homework By BoCheng \'Xunfop\' Chen';

		doc.body.append(item);

		for (let i = 1, content = doc.getElementById('content'); i <= hwnum; i++) {
			create('div', 'hw' + i);
			item.style.position = 'relative';
			item.style.width = '100%';
			item.style.height = '95vh';

			content.appendChild(item);

			let tmp = doc.getElementById('hw' + i);

			create('div', 'hw' + i + 'b');
			item.style.position = 'relative';
			item.style.width = '98%';
			item.style.height = '93vh';
			item.style.left = '1%';
			item.style.top = '1vh';
			item.style.borderRadius = '50px';
			item.style.background = 'white';

			tmp.appendChild(item);

			tmp = doc.getElementById('hw' + i + 'b');

			item = doc.createElement('h1');
			item.style.position = 'relative';
			item.style.left = '50px';
			item.innerHTML = 'Homework ' + i;

			tmp.appendChild(item);

			create('div', 'hw' + i + 'c');
			item.style.display = 'inline-block';
			item.style.position = 'absolute';
			item.style.width = 'auto';
			item.style.top = '50%';
			item.style.left = '50%';
			item.style.transform = 'translate(-50%,-50%)';
			item.style.textAlign = 'center';

			tmp.appendChild(item);
		}

		// 功課一
		create('table', 'hw1t');
		item.style.borderCollapse = 'collapse';
		item.style.fontFamily = 'consola';

		doc.getElementById('hw1c').appendChild(item);

		create('tr', 'hw1tr');

		doc.getElementById('hw1t').appendChild(item);

		for (let i = 2, hw1tr = doc.getElementById('hw1tr'); i < 10; i++) {
			item = doc.createElement('td');
			item.style.border = '3px solid blue';
			item.style.fontSize = '20px';
			item.style.textAlign = 'center';
			item.style.padding = '2px';
			item.onmouseover = tOver;
			item.onmouseout = tOut;

			let f = true;
			for (let j = 1; j < 10; j++) {
				if (!f) {
					item.innerHTML += '<br>';
				} else {
					f = false;
				}

				item.innerHTML += i + '&nbsp;x&nbsp;' + j + '&nbsp;=&nbsp;' + (i * j < 10 ? '&nbsp;' : '') + i * j;
			}

			hw1tr.appendChild(item);
		}

		function tOver() {
			this.style.background = 'cyan';
		}

		function tOut() {
			this.style.background = '';
		}

		// 功課二
		create('form', 'hw2f');
		item.action = 'index.html#hw2';
		item.method = 'GET';
		item.enctype = 'multipart/form-data';

		doc.getElementById('hw2c').appendChild(item);

		create('fieldset', 'hw2ff');
		item.style.textAlign = 'left';
		item.style.border = '2px solid blue';
		item.style.borderRadius = '15px';
		item.style.padding = '15px';

		doc.getElementById('hw2f').appendChild(item);

		create('legend', 'lgd');

		hw2ff.appendChild(item);

		item = doc.createElement('h2');
		item.innerHTML = '表單檢查';

		doc.getElementById('lgd').appendChild(item);

		for (let i = 1, hw2ff = doc.getElementById('hw2ff'); i <= 4; i++) {
			create('div', 'hw2d' + i);
			item.style.lineHeight = '30px';

			hw2ff.appendChild(item);

			if (i != 4) {
				let tmp = doc.getElementById('hw2d' + i);

				create('label', 'lb' + i);
				item.style.display = 'inline-block';

				tmp.appendChild(item);

				create('input', 'ipt' + i);
				item.type = 'text';
				item.name = 'ipt' + i;
				item.autocomplete = 'off';

				doc.getElementById('lb' + i).appendChild(item);

				create('span', 'sp' + i);
				item.style.display = 'inline-block';
				item.style.textAlign = 'center';

				tmp.appendChild(item);

				item = doc.createElement('br');

				tmp.appendChild(item);

				create('span', 'st' + i);
				item.style.display = 'inline-block';
				item.style.color = 'grey';

				tmp.appendChild(item);

				item = doc.createElement('hr');

				hw2ff.appendChild(item);
			} else {
				let hw2d4 = doc.getElementById('hw2d4');

				hw2d4.style.textAlign = 'center';

				item = doc.createElement('button');
				item.type = 'submit';
				item.innerHTML = '送出';

				hw2d4.appendChild(item);

				item = doc.createElement('button');
				item.type = 'reset';
				item.innerHTML = '清除';

				hw2d4.appendChild(item);
			}
		}

		doc.getElementById('lb1').innerHTML = '名稱：' + doc.getElementById('lb1').innerHTML;
		doc.getElementById('lb2').innerHTML = '密碼：' + doc.getElementById('lb2').innerHTML;
		doc.getElementById('lb3').innerHTML = '日期：' + doc.getElementById('lb3').innerHTML;

		let acc = doc.getElementById('ipt1');
		let pwd = doc.getElementById('ipt2');
		let dt = doc.getElementById('ipt3');

		acc.placeholder = '黃建民';
		pwd.placeholder = '請輸入密碼';
		dt.placeholder = 'ex：2000/2/29';

		acc.onblur = accBlur;
		pwd.onblur = pwdBlur;
		dt.onblur = dtBlur;

		doc.getElementById('st1').innerHTML = '1. 不可空白 2.至少兩個字以上 3.必須全部都是中文';
		doc.getElementById('st2').innerHTML = '1. 不可空白 2.至少6個字 3.必須包含英文字母、數字、特殊字元[!@#$%^&*]';
		doc.getElementById('st3').innerHTML = '格式：西元年/月/日 yyyy/MM/dd';

		let accs = doc.getElementById('sp1');
		let pwds = doc.getElementById('sp2');
		let dts = doc.getElementById('sp3');

		function accBlur() {
			let pass = false;

			let reg = /^[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6D6}\u{2A700}-\u{2B734}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}]+$/u;
			let len = acc.value.length;
			if (len == 0) {
				accs.innerHTML = '不能留為空白';
			} else if (len < 2) {
				accs.innerHTML = '至少兩個字元';
			} else if (!reg.test(acc.value)) {
				accs.innerHTML = '僅能輸入漢字';
			} else {
				pass = true;
			}

			if (!pass) {
				acc.style.boxShadow = '0 0 10px red';
			} else {
				accs.innerHTML = '輸入正確';
				acc.style.boxShadow = '0 0 10px green';
			}
		}

		function pwdBlur() {
			let pass = false;

			let len = pwd.value.length;
			if (len == 0) {
				pwds.innerHTML = '不能留為空白';
			} else if (len < 6) {
				pwds.innerHTML = '至少六個字元';
			} else if (!/[!@#$%^&*]+/.test(pwd.value)) {
				pwds.innerHTML = '必須包含特殊字元[!@#$%^&*]';
			} else if (!/\d+/.test(pwd.value)) {
				pwds.innerHTML = '必須包含數字';
			} else if (!/[a-zA-Z]+/.test(pwd.value)) {
				pwds.innerHTML = '必須包含英文字母';
			} else {
				pass = true;
			}

			if (!pass) {
				pwd.style.boxShadow = '0 0 10px red';
			} else {
				pwds.innerHTML = '輸入正確';
				pwd.style.boxShadow = '0 0 10px green';
			}
		}

		function dtBlur() {
			let pass = false;

			if (!/^[1-9]\d{3}\/([1-9]|1[0-2])\/([1-9]|[1-2][0-9]|3[0-1])$/.test(dt.value)) {
				dts.innerHTML = '格式輸入錯誤';
			} else {
				let dates = dt.value.split('/');
				if (dates[2] != new Date(dates[0], parseInt(dates[1]) - 1, dates[2]).getDate()) {
					dts.innerHTML = '無效的日期';
				} else {
					pass = true;

					dts.innerHTML = '輸入正確';
				}
			}

			if (!pass) {
				dt.style.boxShadow = '0 0 10px red';
			} else {
				dts.value = '';
				dt.style.boxShadow = '0 0 10px green';
			}
		}

		// 功課三
		let clicked = false;
		for (let i = 1, hw3c = doc.getElementById('hw3c'); i <= 6; i++) {
			if (i != 6) {
				create('img', i + 'star');
				item.src = 'img/star.gif';
				item.style.width = '100px';
				item.onmouseover = iOver;
				item.onmouseout = iOut;
				item.onclick = iClick;

				hw3c.appendChild(item);
			} else {
				item = doc.createElement('br');

				hw3c.appendChild(item);

				create('span', 'stars');
				item.style.fontSize = '50px';
				item.innerHTML = '目前有 0 顆星';

				hw3c.appendChild(item);

				hw3c.style.textAlign = 'center';
			}
		}

		let stars = doc.getElementById('stars');

		function iOver() {
			if (!clicked) {
				let starnum = parseInt(this.id.substring(0, 1));

				for (let i = 1; i <= 5; i++) {
					if (i <= starnum) {
						doc.getElementById(i + 'star').src = 'img/chngstar.gif';
					}
				}

				stars.innerHTML = '目前有 ' + starnum + ' 顆星';
			}
		}

		function iOut() {
			if (!clicked) {
				for (let i = 1; i <= 5; i++) {
					doc.getElementById(i + 'star').src = 'img/star.gif';
				}

				stars.innerHTML = '目前有 0 顆星';
			}
		}

		function iClick() {
			if (!clicked) {
				clicked = true;

				doc.getElementById('stars').innerHTML = '選擇了 ' + this.id.substring(0, 1) + ' 顆星';
			}
		}

		// 功課四
		doc.getElementById('hw4c').style.textAlign = 'center';

		create('figure', 'fig');
		item.style.width = '400px';
		item.style.margin = '0 auto 10px auto';
		item.style.background = 'silver';

		doc.getElementById('hw4c').appendChild(item);

		create('a', 'flink');

		doc.getElementById('fig').appendChild(item);

		let flink = doc.getElementById('flink');

		create('img', 'fimg');
		item.style.display = 'block';
		item.style.width = '400px';
		item.style.height = '320px';

		flink.appendChild(item);

		create('figcation', 'figc');
		item.style.display = 'inline-block';

		doc.getElementById('fig').appendChild(item);

		let figc = doc.getElementById('figc');

		for (let i = 1; i <= 4; i++) {
			create('img', 'img' + i);
			item.style.width = '80px';
			item.style.height = '80px';
			item.style.margin = '0 10px';
			item.onclick = imgClk;

			doc.getElementById('hw4c').appendChild(item);
		}

		item = doc.createElement('br');

		doc.getElementById('hw4c').appendChild(item);

		for (let i = 1; i <= 3; i++) {
			create('button', 'btn' + i);
			item.style.width = '60px';
			item.style.margin = '20px';

			doc.getElementById('hw4c').appendChild(item);
		}

		doc.getElementById('btn1').innerHTML = '上一張';
		doc.getElementById('btn2').innerHTML = '停止';
		doc.getElementById('btn3').innerHTML = '下一張';

		doc.getElementById('btn1').onclick = imgNag;
		doc.getElementById('btn3').onclick = imgPos;

		let btn2 = doc.getElementById('btn2');
		btn2.onclick = imgAct;

		let imgs = [
			doc.getElementById('img1'),
			doc.getElementById('img2'),
			doc.getElementById('img3'),
			doc.getElementById('img4')
		];

		imgs[0].title = '跨域Java軟體工程師就業養成班';
		imgs[0].src = 'https://www.iiiedu.org.tw/wp-content/uploads/2019/09/eeit-2019-cover-400x320.png';
		imgs[0].style.boxShadow = '5px 5px 10px purple';

		imgs[1].title = '全方位IT工程師就業養成班';
		imgs[1].src = 'https://www.iiiedu.org.tw/wp-content/uploads/2020/01/cover-0215-1-400x320.png';

		imgs[2].title = '互動式網站UI/UX設計師就業養成班';
		imgs[2].src = 'https://www.iiiedu.org.tw/wp-content/uploads/2019/12/mmmh-cover-400x320-400x320.png';

		imgs[3].title = 'Big Data 巨量資料分析就業養成班';
		imgs[3].src = 'https://www.iiiedu.org.tw/wp-content/uploads/2019/06/bdse-cover-400x320.png';

		let fimg = doc.getElementById('fimg');

		fimg.src = imgs[0].src;
		figc.innerHTML = imgs[0].title;
		flink.href = 'https://www.iiiedu.org.tw/eeit/';

		let imgnum = 0;
		let intImg = setInterval(imgPos, 2000);
		function imgPos() {
			imgnum++;

			if (imgnum == imgs.length) {
				imgnum = 0;
			}

			chgImg();
		}

		function imgNag() {
			imgnum--;

			if (imgnum < 0) {
				imgnum = imgs.length - 1;
			}

			chgImg();
		}

		let active = true;
		function imgAct() {
			if (active) {
				clearInterval(intImg);

				btn2.innerHTML = '開始';
			} else {
				intImg = setInterval(imgPos, 2000);

				btn2.innerHTML = '停止';
			}

			active = !active;
		}

		function imgClk() {
			imgnum = parseInt(this.id.substring(3)) - 1;

			chgImg();
		}

		let chgImg = function () {
			fimg.src = imgs[imgnum].src;
			figc.innerHTML = imgs[imgnum].title;

			switch (imgnum) {
				case 1:
					flink.href = 'https://www.iiiedu.org.tw/eeit/';
					break;
				case 2:
					flink.href = 'https://www.iiiedu.org.tw/iten/';
					break;
				case 3:
					flink.href = 'https://www.iiiedu.org.tw/uiux/';
					break;
				case 4:
					flink.href = 'https://www.iiiedu.org.tw/bigdatatc/';
					break;
			}

			for (let i = 0, len = imgs.length; i < len; i++) {
				if (i == imgnum) {
					imgs[i].style.boxShadow = '5px 5px 10px purple';
				} else {
					imgs[i].style.boxShadow = '';
				}
			}
		}

		// 功課五
		doc.getElementById('hw5c').style.textAlign = 'center';
		for (let i = 1, hw5c = doc.getElementById('hw5c'); i <= 3; i++) {
			create('select', 'h5s' + i);
			item.style.width = '60px';

			hw5c.appendChild(item);

			create('label', 'h5lb' + i);
			item.style.display = 'inline-block';
			item.style.width = '60px';

			hw5c.appendChild(item);
		}

		create('span', 'hw5s');
		item.style.display = 'inline-block';
		item.style.width = '100%';
		doc.getElementById('hw5c').appendChild(item);

		let hw5s = doc.getElementById('hw5s');

		doc.getElementById('h5lb1').innerHTML = '年';
		doc.getElementById('h5lb2').innerHTML = '月';
		doc.getElementById('h5lb3').innerHTML = '日';

		let h5s1 = doc.getElementById('h5s1');
		let h5s2 = doc.getElementById('h5s2');
		let h5s3 = doc.getElementById('h5s3');

		h5s1.onchange = dayGen;
		h5s2.onchange = dayGen;
		h5s3.onchange = dayChs;

		for (let i = 2010; i <= 2020; i++) {
			item = doc.createElement('option');
			item.value = i;
			item.innerHTML = i;

			h5s1.appendChild(item);
		}

		for (let i = 1; i <= 12; i++) {
			item = doc.createElement('option');
			item.value = i;
			item.innerHTML = i;

			h5s2.appendChild(item);
		}

		dayGen();
		dayChs();

		function dayGen() {
			h5s3.innerHTML = '';

			for (let i = 1, day = new Date(h5s1.value, h5s2.value, 0).getDate(); i <= day; i++) {
				item = doc.createElement('option');
				item.value = i;
				item.innerHTML = i;

				h5s3.appendChild(item);
			}

			dayChs();
		}

		function dayChs() {
			hw5s.innerHTML = '你選擇的日期為：' + h5s1.value + '年' + h5s2.value + '月' + h5s3.value + '日';
		}