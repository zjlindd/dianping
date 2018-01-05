export default {
    getItem: function (key) {

        return localStorage.getItem(key);
    },
    setItem: function (key, value) {

        localStorage.setItem(key, value);
    }
}