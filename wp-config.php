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
define( 'AUTH_KEY',         '</NK716Rx6;F;8N<!>*nsJC2H>bVg3(n-Be1d@JCJ.!FVt{{@ut=xiy*iZWZ7=*N' );
define( 'SECURE_AUTH_KEY',  'Hhif(J,B]KZ#1/[zD|JuH6wfdR9VK.(FXm;,KgF_kB?h*J`G),jD,?>C{Z#gh$0R' );
define( 'LOGGED_IN_KEY',    'cP&%-j.~_{x+MUD4IHhGX]f)M?kbf~etvir(?rejDEZx$giCOo(FEZH`C}Zy68t_' );
define( 'NONCE_KEY',        ';u69~52}*ea.(doQkmG02<icM%oVOhW0IDHHe0wO 5m3@iXA_bMq{|b@)D>^laz)' );
define( 'AUTH_SALT',        '01+RjgAkbZV3JEfR7&j7|@QdZF;z>D(Cmp#vEedR^LN?oCiv0[Y@Cn7Ca$PydTQ>' );
define( 'SECURE_AUTH_SALT', ' 2iaYQNbZn,!/CE1^Uy=<ns2IBoV>>_dq+I>@hdqUu4=CT!}$*(!eNwzb@JjgB+`' );
define( 'LOGGED_IN_SALT',   't<U!a^q0/afp;wQE!ZGPk?9$RDb/VQ!BBQs{Ak6rp5#zMDfk-5-t?OemQcwZ|OFI' );
define( 'NONCE_SALT',       'i>/]T[xjf<yNJqZw5<1_t)i9Ic(!XHI,0!p0<PQ%Fz{W#vnPitp6#!uJMpA2*vW)' );

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
