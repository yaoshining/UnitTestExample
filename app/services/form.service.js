/**
 * Created by yaoshining on 2017/2/15.
 */
angular.module('form.services', []).service('formValidator', function() {

    function checkAge(form) {
        let age = form.age;
        let errors = [];
        if(age === null || age === '' || age === undefined) {
            errors.push('error.age.noEmpty');
        } else {
            if(age <= 0) {
                errors.push('error.age.noPositive');
            }
            if(age > 120) {
                errors.push('error.age.exceeded');
            }
        }
        return errors;
    }

    function checkName(form) {
        const name = form.name;
        let errors = [];
        if(name === null || name === '' || name === undefined) {
            errors.push('error.name.noEmpty');
        } else {
            if(name.length > 4) {
                errors.push('error.name.tooLong');
            }
        }
        return errors;
    }

    return {
        checkName,
        checkAge,
        check: form => {
            let ageErrors = checkAge(form),
                nameErrors = checkName(form);
            return [].concat(ageErrors, nameErrors);
        }
    };
});