<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wellness-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8888' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'pw}-mi-_du*A.]~N:c}Z.0N%Gq^%#XW!rV#CJe4GVTF*}8jl>,?:2_A044i+7_,6' );
define( 'SECURE_AUTH_KEY',  'aOmt6En>ul2@ESl<i@JR>@!NKgA7alb_o`(--<L+?k <hsmoH&n.dE5s9C(#E;tw' );
define( 'LOGGED_IN_KEY',    '+$D0)SEar+<5_/MqTZvJ%`;wrVp(t=;k64y*bKhgn{@15kqo<-SV[OL:[hTVX2i^' );
define( 'NONCE_KEY',        'a@Zzwn)}3qIXR+ 3mL$>cZMtN@w(s;gesIN59C6/n.#~4s<_~A/h<h{fsKugu4x>' );
define( 'AUTH_SALT',        'fgVVz{ydV:AmNK0cXUDC2yJDr^7uh[*l?JW5ec8=!W@;=C$,Nz{ZxWv[6Fwf#7ZX' );
define( 'SECURE_AUTH_SALT', '?f}M}8x55]~BffJ+`I[6rHp`Vy#(-(O)iJ-2oR@h^6$ocoWfCb<_y r?a1EA>]-t' );
define( 'LOGGED_IN_SALT',   '**Cz!;4n:Dpviuyh.-nE69JRqoJxo| 5Af^&3ch4t_XI)o@3cG`?LVn=c]uJh%el' );
define( 'NONCE_SALT',       'g7)ek|O`ITHG9P4B3}V*JsEMiS~J).9VB[F8}^}d7o(eU8<Zy4u6ri;U7p`m D!:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
