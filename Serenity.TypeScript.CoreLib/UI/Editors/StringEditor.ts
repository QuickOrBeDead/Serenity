﻿namespace Serenity {

    @Serenity.Decorators.element("<input type=\"text\"/>")
    @Serenity.Decorators.registerEditor([IStringValue])
    export class StringEditor extends Widget<any> {

        constructor(input: JQuery) {
            super(input);
        }

        public get value(): string {
            return this.element.val();
        }

        protected get_value(): string {
            return this.value;
        }

        public set value(value: string) {
            this.element.val(value);
        }

        protected set_value(value: string): void {
            this.value = value;
        }
    }
}