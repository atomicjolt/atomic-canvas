export function CanvasAuthentication(props: any): React.JSX.Element;
export namespace CanvasAuthentication {
    namespace defaultProps {
        const overrides: {};
        const hideButton: boolean;
        const autoSubmit: boolean;
        const buttonClassName: string;
        const buttonText: null;
    }
    namespace propTypes {
        const overrides_1: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        export { overrides_1 as overrides };
        const hideButton_1: PropTypes.Requireable<boolean>;
        export { hideButton_1 as hideButton };
        const autoSubmit_1: PropTypes.Requireable<boolean>;
        export { autoSubmit_1 as autoSubmit };
        export const settings: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            canvas_oauth_url: PropTypes.Requireable<string>;
        }>>>;
        const buttonClassName_1: PropTypes.Requireable<string>;
        export { buttonClassName_1 as buttonClassName };
        const buttonText_1: PropTypes.Requireable<string>;
        export { buttonText_1 as buttonText };
    }
}
declare const _default: (props: any) => JSX.Element;
export default _default;
import React from "react";
import PropTypes from "prop-types";
