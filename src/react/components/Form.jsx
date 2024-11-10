export default function Form({ className, children, onSubmit }) {
    return (
        <form action="" method="POST" className={className} autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
            {children}
        </form>
    );
}