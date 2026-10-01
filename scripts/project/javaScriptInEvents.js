

const scriptsInEvents = {

	async GebeurtenissenBlad1_Event19_Act1(runtime, localVars)
	{
		if (confirm("Are you sure you want to reset your progress?")) {
		
		    // 1. Reset de globale variabelen
		    runtime.globalVars.Auto = 0;
		    runtime.globalVars.AutoPrice = 15;
		    runtime.globalVars.Money = 1;
		    runtime.globalVars.MoneyMultiplier = 1;
		    runtime.globalVars.MoneyPrice = 10;
		    runtime.globalVars.Speed = 1;
		    runtime.globalVars.SpeedPrice = 5;
		
		    // 2. Reset de variabele op het Tekst-object (Tekst.Money)
		    const tekstObject = runtime.objects.Tekst.getFirstInstance();
		    if (tekstObject) {
		        tekstObject.instVars.Money = 0;
		        // Update het geld-teks-object op het scherm:
		        tekstObject.text = "$" + tekstObject.instVars.Money;
		    }
		
		    // 3. Update de overige prijs-teksten op het scherm
		    const speedPriceText = runtime.objects.SpeedPrice.getFirstInstance();
		    if (speedPriceText) {
		        speedPriceText.text = "$" + runtime.globalVars.SpeedPrice;
		    }
		
		    const moneyPriceText = runtime.objects.MoneyPrice.getFirstInstance();
		    if (moneyPriceText) {
		        moneyPriceText.text = "$" + runtime.globalVars.MoneyPrice;
		    }
		
		    const autoPriceText = runtime.objects.AutoPrice.getFirstInstance();
		    if (autoPriceText) {
		        autoPriceText.text = "$" + runtime.globalVars.AutoPrice;
		    }
		
			const MoneyText = runtime.objects.Tekst.
			getFirstInstance();
		    if (MoneyText) {
		        MoneyText.text = "$" + MoneyText.instVars.Money;
		    }
		
		    // 4. Reset de X-positie van de tompoes
		    const tompoes = runtime.objects.NewProject.getFirstInstance();
		    if (tompoes) {
		        tompoes.x = 0;
		    }
		
			const objectToHide = runtime.objects.c2bcb432b9924503971fd73b5f32c313removebgpreview.getFirstInstance();
		    if (objectToHide) {
		        objectToHide.isVisible = false; // Dit maakt het object onzichtbaar
		    }
		
		    // 5. Opslaan naar "mysave" en de layout herladen
		    runtime.saves.save("mysave").then(() => {
		        runtime.goToLayout(runtime.layout.name);
		    });
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
