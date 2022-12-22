'use strict';

/**
 * Create a new Deffered
 *
 * @generic T - value of the deffered
 * @returns Deferred<T>
 */
const deferred = () => {
    let resolve;
    let reject;
    const value = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    return {
        resolve,
        reject,
        value,
    };
};

exports.deferred = deferred;
//# sourceMappingURL=deferred.cjs.map
