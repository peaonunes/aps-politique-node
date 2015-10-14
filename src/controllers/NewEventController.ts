import TEMPLATE_NAMES = require('../utils/TemplateNames');

class NewEventController {
    public newEvent(request, reply) : void{
        reply.view(TEMPLATE_NAMES.NEW_EVENT);
    }
}

export = NewEventController;