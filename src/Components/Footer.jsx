import React from "react";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-[#67C6E3] border-t-slate-950 border-2 text-base-content px-24">
			<form>
				<h6 className="footer-title">About Us</h6>
				<p className="w-80 text-justify">
					From lavish resorts to charming boutiques, we're here to make your
					dream getaway a reality. Welcome to excellence in hospitality.
				</p>
				<fieldset className="form-control w-80">
					<label className="label">
						<span className="label-text">Enter your email address</span>
					</label>
					<div className="join">
						<input
							type="text"
							placeholder="username@site.com"
							className="input input-bordered join-item"
						/>
						<button className="btn bg-[#5356FF] join-item text-[#DFF5FF]">
							Subscribe
						</button>
					</div>
				</fieldset>
			</form>
			<nav>
				<h6 className="footer-title">Social Media</h6>
				<a className="link link-hover">Facebook</a>
				<a className="link link-hover">Instagram</a>
				<a className="link link-hover">Twitter</a>
				<a className="link link-hover">Telegram</a>
			</nav>
			<nav className="gap-2">
				<h6 className="footer-title">Contact Us</h6>
				<div>
					<p>256, 1st AVE, Manchester</p>
					<p>125 , Noth England</p>
				</div>
				<div>
					<p>Telephone : +012 345 678 102</p>
					<p>Telephone : +013 445 678 155</p>
				</div>
				<div>
					<p>Email : <a className="link link-hover">info@example.com</a></p>
					<p>Web : <a className="link link-hover">www.example.com</a></p>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;