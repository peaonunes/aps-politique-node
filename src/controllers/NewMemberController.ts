import TEMPLATE_NAMES = require('../utils/TemplateNames');

class NewMemberController {
    public newMember(request, reply) : void{
        reply.view(TEMPLATE_NAMES.NEW_MEMBER);
    }
}

export = NewMemberController;