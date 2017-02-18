/**
 * Created by yaoshining on 2017/2/15.
 */
describe('表单验证器', function() {

    beforeEach(module('starbucks'));

    let formValidator;
    let formData = {};

    beforeEach(inject(function(_formValidator_) {
        formValidator = _formValidator_;
    }));

    describe('年龄验证', function() {
        it('年龄为空时，应该返回error.age.noEmpty的错误', function() {
            formData.age = '';
            let errors = formValidator.checkAge(formData);
            assert.deepEqual(errors, ['error.age.noEmpty']);
            expect(errors).to.be.deep.equal(['error.age.noEmpty']);
            errors.should.be.deep.equal(['error.age.noEmpty']);
        });

        describe('年龄为非正数的时候, 应该返回error.age.noPositive的错误', function() {

            it('为0时', function() {
                formData.age = 0;
                let errors = formValidator.checkAge(formData);
                errors.should.be.deep.equal(['error.age.noPositive']);
            });

            it('为-2时', function() {
                formData.age = -2;
                let errors = formValidator.check(formData);
                expect(errors).to.include('error.age.noPositive');
            });
        });

        it('年龄的格式正确的时候，应该不返回任何错误', function() {
            formData.age = 29;
            let errors = formValidator.checkAge(formData);
            expect(errors).to.be.empty;
        });

        it('年龄如果超过120岁，应该返回error.age.exceeded的错误', function () {
            formData.age = 121;
            let errors = formValidator.checkAge(formData);
            errors.should.be.deep.equal(['error.age.exceeded']);
        });
    });

    describe('名字验证', function() {

        it('名字为空时，应该返回error.name.noEmpty的错误', function() {
            formData.name = '';
            let errors = formValidator.checkName(formData);
            assert.deepEqual(errors, ['error.name.noEmpty']);
            expect(errors).to.be.deep.equal(['error.name.noEmpty']);
            errors.should.be.deep.equal(['error.name.noEmpty']);
        });

        it('名字超过4个字符时，要返回error.name.tooLong的错误', function() {
            formData.name = '史蒂夫●乔布斯';
            let errors = formValidator.checkName(formData);
            errors.should.be.deep.equal(['error.name.tooLong']);
        });
    });

});