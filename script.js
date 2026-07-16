function calculateRisk() {

    let risk = 100;

    const checkedItems = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    const selected = [];

    checkedItems.forEach(item => {

        selected.push(item.value);

        switch (item.value) {

            case "hazard":
                risk *= 0.9;
                break;

            case "bag":
                risk *= 0.95;
                break;

            case "route":
                risk *= 0.8;
                break;

            case "drill":
                risk *= 0.9;
                break;

            case "family":
                risk *= 0.7;
                break;

            case "food":
                risk *= 0.92;
                break;

            case "furniture":
                risk *= 0.88;
                break;

            case "app":
                risk *= 0.95;
                break;

            case "community":
                risk *= 0.85;
                break;
        }

    });



    /* 相乗効果 */

    if (
        selected.includes("hazard") &&
        selected.includes("route")
    ) {
        risk *= 0.9;
    }

    if (
        selected.includes("route") &&
        selected.includes("drill")
    ) {
        risk *= 0.85;
    }

    if (
        selected.includes("family") &&
        selected.includes("app")
    ) {
        risk *= 0.9;
    }



    /* 元の5項目すべて選択 */

    if (
        selected.includes("hazard") &&
        selected.includes("bag") &&
        selected.includes("route") &&
        selected.includes("drill") &&
        selected.includes("family")
    ) {
        risk *= 0.77;
    }

    risk = Math.round(risk);



    let grade = "";
    let message = "";
    let color = "";



    if (risk >= 80) {

        grade = "危険";
        color = "red";

        message =
            "防災対策が不足しています。まずは避難場所の確認から始めましょう。";

    } else if (risk >= 60) {

        grade = "要注意";
        color = "orange";

        message =
            "もう少し備えを増やしましょう。";

    } else if (risk >= 40) {

        grade = "標準";
        color = "#e6b800";

        message =
            "基本的な防災対策ができています。";

    } else if (risk >= 20) {

        grade = "良好";
        color = "green";

        message =
            "十分な防災対策ができています。";

    } else {

        grade = "防災マスター";
        color = "darkgreen";

        message =
            "素晴らしい！非常に高い防災力です！";
    }



    document.getElementById("riskValue").textContent =
        "危険度：" + risk;

    document.getElementById("riskValue").style.color =
        color;

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("grade").style.color =
        color;

    document.getElementById("message").textContent =
        message;
}