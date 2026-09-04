CREATE TABLE `blog_post_views` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`category` varchar(100),
	`viewCount` int NOT NULL DEFAULT 0,
	`lastViewedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `blog_post_views_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_post_views_slug_unique` UNIQUE(`slug`)
);
