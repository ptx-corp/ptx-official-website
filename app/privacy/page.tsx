"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    const { language } = useLanguage();

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollAnimation animation="fade-in-up">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'th' ? 'กลับสู่หน้าหลัก' : 'Back to Home'}
                    </Link>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 shadow-sm border border-zinc-200 dark:border-zinc-800">
                        {language === 'th' ? (
                            <article className="prose dark:prose-invert max-w-none">
                                <h1 className="text-3xl font-bold mb-8 text-[#0A2342] dark:text-white">นโยบายความเป็นส่วนตัว</h1>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">1. ภาพรวม (Overview)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        เว็บไซต์ของ <strong>PT X</strong> ("เรา") ตระหนักถึงความสำคัญของความเป็นส่วนตัวของท่าน นโยบายนี้อธิบายถึงวิธีการที่เราจัดการข้อมูลเมื่อท่านเข้าชมเว็บไซต์ของเรา
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">2. การเก็บรวบรวมข้อมูล (Data Collection)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        เว็บไซต์นี้เป็นเว็บไซต์รูปแบบ Static Website <strong>เราไม่มีการเก็บรวบรวมข้อมูลส่วนบุคคลของท่าน</strong> (เช่น ชื่อ, อีเมล, ที่อยู่) ลงในฐานข้อมูลของเรา และไม่มีการใช้คุกกี้เพื่อการติดตามโฆษณา (Marketing Cookies)
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">3. ข้อมูลทางเทคนิคและผู้ให้บริการ (Technical Data & Hosting)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 mb-2">
                                        เว็บไซต์นี้ให้บริการผ่านโครงข่ายของ <strong>Cloudflare</strong> เพื่อประสิทธิภาพและความปลอดภัย
                                    </p>
                                    <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
                                        <li>
                                            <strong>ผู้ควบคุมข้อมูล (Data Controller):</strong> PT X
                                        </li>
                                        <li>
                                            <strong>ผู้ประมวลผลข้อมูล (Data Processor):</strong> Cloudflare
                                        </li>
                                        <li>
                                            <strong>การโอนย้ายข้อมูลระหว่างประเทศ:</strong> ข้อมูลทางเทคนิค (เช่น IP Address) อาจถูกส่งไปประมวลผลที่เซิร์ฟเวอร์ของ Cloudflare ในต่างประเทศ เพื่อวัตถุประสงค์ในการรักษาความปลอดภัย (เช่น การป้องกัน DDoS) และการวิเคราะห์ประสิทธิภาพระบบเท่านั้น
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">4. การบันทึกการตั้งค่า (Local Storage)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        เรามีการใช้งานหน่วยความจำภายในเบราว์เซอร์ (Local Storage) เพื่อวัตถุประสงค์ในการ <strong>"จดจำสถานะโหมดมืด/สว่าง (Dark/Light Mode) และการตั้งค่าภาษา (Language Preference)"</strong> ที่ท่านเลือก เพื่อให้ท่านได้รับประสบการณ์การใช้งานที่ต่อเนื่องเมื่อเปลี่ยนหน้า
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">5. การติดต่อ (Contact)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อเราได้ที่: <a href="mailto:info@ptx.co.th" className="text-accent hover:underline">info@ptx.co.th</a>
                                    </p>
                                </section>
                            </article>
                        ) : (
                            <article className="prose dark:prose-invert max-w-none">
                                <h1 className="text-3xl font-bold mb-8 text-[#0A2342] dark:text-white">Privacy Policy</h1>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">1. Overview</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        <strong>PT X</strong> ("we") respects your privacy. This policy explains how we handle information when you visit our website.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">2. Data Collection</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        This is a static website. <strong>We do not collect any personal data</strong> (such as names, emails, or addresses) into our databases. We do not use cookies for advertising or tracking purposes.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">3. Technical Data & Hosting</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 mb-2">
                                        This website is hosted on <strong>Cloudflare</strong> for performance and security.
                                    </p>
                                    <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
                                        <li>
                                            <strong>Data Controller:</strong> PT X
                                        </li>
                                        <li>
                                            <strong>Data Processor:</strong> Cloudflare
                                        </li>
                                        <li>
                                            <strong>International Transfer:</strong> Technical data (e.g., IP addresses) may be processed on Cloudflare's servers internationally solely for security purposes (e.g., DDoS protection) and system performance analysis.
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">4. Local Storage</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        We use your browser's Local Storage to <strong>remember your Dark/Light mode preference and Language Preference</strong>. This ensures a consistent visual experience as you navigate the site.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-4 text-[#0A2342] dark:text-white">5. Contact</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300">
                                        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@ptx.co.th" className="text-accent hover:underline">info@ptx.co.th</a>
                                    </p>
                                </section>
                            </article>
                        )}
                    </div>
                </ScrollAnimation>
            </div>
        </main>
    );
}
