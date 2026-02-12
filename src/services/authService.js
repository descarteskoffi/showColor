const users = [
        {
            id: 1,
            name: "Yehouenou",
            firstName: "Manoël",
            email: "manoel@example.com",
            password: "poiuy",
        },
        {
            id: 2,
            name: "Koffi",
            firstName: "Descartes",
            email: "descartes@example.com",
            password: "mlkjh",
        }
];

export const authService = {
    login(usersInfos) {
        const found = users.find(
            u => u.email === usersInfos.email && u.password === usersInfos.password,
        );
        if (found) {
            localStorage.setItem("isLoggedIn", 'true');
            return true;
        } 
        return false;
    },
    logOut() {
        localStorage.removeItem("isLoggedIn");
    },
    isAuthenticated() {
        return localStorage.getItem("isLoggedIn") === 'true';
    },
};
