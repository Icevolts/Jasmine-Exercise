describe('Set up tests for Payments',function(){
    beforeEach(function(){
        billAmountInput.value = 100;
        tipAmountInput.value = 15; 
    });

    it('should add new payment to allPayments on submitPaymentInfo',function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('15');
        expect(allPayments['payment1'].tipPercent).toEqual('15');
    });

    it('should update paymentTable on appendPaymentTable',function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList.length).toEqual(4)
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$15');
        expect(curTdList[2].innerText).toEqual('%15');
        expect(curTdList[3].innerText).toEqual('X');
    });

    it('should create new payment on createCurPayment',function(){
        let expectedPayment = {
            billAmt: '200',
            tipAmt: '20',
            tipPercent: '10'
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});