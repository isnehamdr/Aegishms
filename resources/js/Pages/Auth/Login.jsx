import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
            <Head title="Log in" />

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left: Form */}
                <div className="p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
                        <p className="mt-2 text-sm text-gray-500">Sign in with Email & Password</p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                placeholder="Enter E-mail"
                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-[#005C94] focus:ring-1 focus:ring-[#005C94]"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    placeholder="Enter Password"
                                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 focus:border-[#005C94] focus:ring-1 focus:ring-[#005C94]"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#005C94]"
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                            <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                                            <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                            <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-600">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-gray-500 hover:text-[#005C94]"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#005C94] px-4 py-3 text-sm font-semibold text-white hover:bg-[#003a5c] disabled:opacity-60"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Right: Brand Panel */}
                <div className="bg-[#005C94] text-white flex flex-col items-center justify-center p-10 sm:p-12">
                  <img
    src="/images/logo.png"
    alt="Aegishms"
    className="w-28 h-28 object-contain mb-4 bg-white rounded-full p-2"
/>
                    <h2 className="text-3xl font-bold">Aegishms</h2>
                    <p className="mt-2 text-sm text-white/80 text-center max-w-xs">
                        Welcome back. Please sign in to continue.
                    </p>
                </div>
            </div>
        </div>
    );
}
