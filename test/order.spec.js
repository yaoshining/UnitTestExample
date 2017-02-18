/**
 * Created by yaoshining on 2017/2/16.
 */
describe('用户打开订单列表', function() {

    beforeEach(module('starbucks'));

    let $controller;

    beforeEach(inject(function(_$controller_, _orderService_) {
        $controller = _$controller_;
        _orderService_.get = sinon.stub();
        _orderService_.get.withArgs(-1).returns([]);
        this.orderService = _orderService_;
    }));

    context('订单列表为空时', function() {

        beforeEach(function() {
            this.orderId = -1;
            let $scope = {
                orderId: this.orderId
            };
            this.orderController = $controller('OrderController', {
                $scope: $scope,
                orderService: this.orderService
            });
        });

        it('应该没有订单项被列出', function() {
            expect(this.orderController).to.have.property('items').that.is.empty;
        });
        it('总价格应该显示为0', function() {
            this.orderController.should.have.property('totalPrice').that.is.equal(0);
        });
        it('应该只能添加饮料', function() {
            expect(this.orderController).to.have.property('actions')
                .that.is.deep.equal([{
                action: 'append-item',
                target: this.orderId
            }]);
        });
        // it('应该不能下订单');
        // it('应该可以添加饮料');
        // it('应该不能删除饮料');
        // it('应该不能改变饮料的数量');
    });

    context('订单列表中已经有饮料时', function() {
        it('每一种饮料应该只能有1个');
        it('应该显示所有饮料总价');
        it('应该可以下订单');
        it('应该可以添加饮料');
        it('应该可以删除饮料');
        it('应该可以改变饮料的数量');
    });
});