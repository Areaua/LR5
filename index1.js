let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("Rock-n-Roll");
alert(styles);
let n = styles.length;
styles[Math.floor(n / 2)] = "Classics";
alert(styles);
styles.shift()
alert(styles);
styles.unshift("Rap", "Reggae")
alert(styles);