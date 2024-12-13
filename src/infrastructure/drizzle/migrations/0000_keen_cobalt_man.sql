CREATE TABLE "addresses" (
	"id" char(26) PRIMARY KEY NOT NULL,
	"location_id" char(26) NOT NULL,
	"number" varchar(20) NOT NULL,
	"complement" varchar(60)
);
--> statement-breakpoint
CREATE TABLE "locations" (
	"id" char(26) PRIMARY KEY NOT NULL,
	"zip" char(8) NOT NULL,
	"place" text NOT NULL,
	"district" varchar NOT NULL,
	"city" varchar NOT NULL,
	"state" char(2) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE no action ON UPDATE no action;