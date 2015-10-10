class Controller {
  home(request, reply) {
    reply.view('index');
  }
}

export = Controller;
