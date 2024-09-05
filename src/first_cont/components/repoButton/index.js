import CreateIcon from "../../langIcons"


function RepoButton({ name, des, url, lang }) {
	return (
		<a key={name} href={url} target='_blank' rel='noopener noreferrer' className='list-group-item list-group-item-action menu1'>

			<div key={name} className='d-flex w-100 justify-content-between'>
				<h5 className='mb-1 text'> {name} </h5>
			</div>
			<p className='mb-1'>{des ? des : "No description given."}</p>
			{lang.map(key => <CreateIcon key={`${name}+${key}`} lang={key} />)}
		</a>
	)
}

export default RepoButton
