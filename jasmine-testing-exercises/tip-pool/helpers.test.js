describe('Set up the tests for helpers',function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    });

    it('should sum up tip of all payments on sumPaymentTotal', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(45);
    });

    it('should sum up bill amount of all payments on sumPaymentTotal', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum up tip percent on sumPaymentTotal',function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(15);
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(15);
    });

    it('should calculate tip percent of single bill on calculateTipPercent',function(){
        expect(calculateTipPercent(100,15)).toEqual(15);
        expect(calculateTipPercent(100,25)).toEqual(25);
    });

    it('should create new td from value and append to tr with appendTd',function(){
        let newTr = document.createElement('tr');
        appendTd(newTr,'hello');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('hello');
    });

    it('should create a delete button in td on tr on appendDeleteBtn',function(){
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1)
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0
    });
});
  