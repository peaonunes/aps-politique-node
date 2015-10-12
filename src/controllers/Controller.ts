class Controller {
    home(request, reply) {
        reply.view('home');
    }

    newPartnerCompany(request, reply) {
        reply.view('cadastrarEmpresa');
    }

    newEvent(request, reply) {
        reply.view('cadastrarEvento');
    }

    newMember(request, reply) {
        reply.view('cadastrarMembro');
    }

    login(request, reply) {
        reply('login');
    }

    logout(request, reply) {
        reply('logout');
    }

    profile(request, reply) {
        reply('profile');
    }

    searchCompanies(request, reply) {
        reply('search for companies');
    }
}

export = Controller;
