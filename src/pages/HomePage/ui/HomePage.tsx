import cls from "./HomePage.module.scss"

const HomePage = () => {
	return (
		<div className={cls.homepage}>
			<p className={cls.font}>
				Hello from{" "}
				<a
					href="https://github.com/yunglocokid"
					target="_blank"
					className={cls.link}
				>
					yunglocokid
				</a>
			</p>
			<pre className={cls.hint}>
				You can edit <span className={cls.path}>src/pages/HomePage</span> to
				start {"<3"}!<br />
			</pre>
		</div>
	)
}

export default HomePage
