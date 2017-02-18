/**
 * Created by yaoshining on 2017/2/16.
 */
angular.module('starbucks.controllers', []).controller('OrderController', function($scope, orderService) {
    this.orderId = $scope.orderId;
    let order = orderService.get(this.orderId);
    this.items = [];
    this.totalPrice = 0;
    this.actions = [{
        action: 'append-item',
        target: this.orderId
    }];
    if(order) {
        this.items = order.items;
    }
});