CREATE TABLE "schools" (
	"id" char(26) PRIMARY KEY NOT NULL,
	"image" text,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone" char(11) NOT NULL,
	"tax_id" char(14) NOT NULL,
	"address_id" char(26) NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	CONSTRAINT "schools_email_unique" UNIQUE("email"),
	CONSTRAINT "schools_phone_unique" UNIQUE("phone"),
	CONSTRAINT "schools_tax_id_unique" UNIQUE("tax_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" char(26) PRIMARY KEY NOT NULL,
	"image" text,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone" char(11) NOT NULL,
	"password" text NOT NULL,
	"actived_at" timestamp with time zone,
	"created_at" timestamp with time zone NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
ALTER TABLE "schools" ADD CONSTRAINT "schools_address_id_addresses_id_fk" FOREIGN KEY ("address_id") REFERENCES "public"."addresses"("id") ON DELETE cascade ON UPDATE cascade;