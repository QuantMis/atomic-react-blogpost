export function Input({hintText}) {
    return (
        <>
            <input type="text" placeholder={hintText} style={{fontSize: 12, padding: 6, border:'solid 1px #3333', borderRadius:5}}/>
        </>
    );
}
