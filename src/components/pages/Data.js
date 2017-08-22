import { printObj, } from "src/lib/util";

export default data => () => <div style = {{
	whiteSpace: "pre-wrap",
	wordWrap: "break-word",
	fontSize: "11px",
}}>
	{ printObj(data) }
</div>