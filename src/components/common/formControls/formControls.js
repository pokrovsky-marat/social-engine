import React from "react";
import styles from "./formControls.module.css"

function wrappper(tag) {
    return ({input, meta, ...props}) => {
        return (
            <div className={meta.error && meta.touched ? styles.warning : ""}>
                {React.createElement(tag, {...input, ...props})}
                {meta.error && meta.touched && <div><span className={styles.errorMessage}>{meta.error}</span></div>}
            </div>
        )
    }
}


export const TextArea = wrappper('textarea');
/*({input, meta, ...props}) => {
    return (
        <div className={meta.error && meta.touched ? styles.warning : ""}>
            <textarea  {...input}{...props}/>
            {meta.error && meta.touched && <div><span className={styles.errorMessage}>{meta.error}</span></div>}

        </div>
    )
}*/
export const Input = wrappper("input");
/* ({input, meta, ...props}) => {
    debugger
    return (
        <div className={meta.error && meta.touched ? styles.warning : ""}>
            <input  {...input}{...props}/>
            {meta.error && meta.touched && <div><span className={styles.errorMessage}>{meta.error}</span></div>}

        </div>
    )
}*/